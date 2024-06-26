import { OpusPool } from '..';
import { VaultTransaction } from '../types/transaction';
import { StakewiseConnector } from '../internal/connector';
import { Hex } from 'viem';
import { VaultActionType } from '../types/enums';

async function extractTransactionsHistory(
    connector: StakewiseConnector,
    vault: Hex,
    allocatorAddress: Hex,
): Promise<VaultTransaction[]> {
    const vars_getActions = {
        where: {
            vault_: {
                id: vault.toLowerCase(),
            },
            actionType_in: Object.values(VaultActionType),
        },
        first: 1000,
        skip: 0,
    };

    const actionsData = await connector.graphqlRequest({
        type: 'graph',
        op: 'AllocatorActions',
        query: `
        query AllocatorActions(
            $skip: Int!
            $first: Int!
            $where: AllocatorAction_filter
            ) {
            allocatorActions(
                skip: $skip,
                first: $first,
                orderBy: createdAt,
                orderDirection: desc,
                where: $where,
            ) {
                id
                assets
                shares
                createdAt
                actionType
            }
        }
        `,
        variables: vars_getActions,
    });

    if (!actionsData.data.allocatorActions || actionsData.data.allocatorActions.length === 0) {
        throw new Error(`Transaction data is missing the allocatorActions field`);
    }
    const interactions: VaultTransaction[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    actionsData.data.allocatorActions.forEach((action: any) => {
        const createdAt: string = action.createdAt;
        interactions.push({
            vault: vault,
            when: new Date(parseInt(createdAt) * 1000),
            type: action.actionType,
            amount: action.assets ? BigInt(action.assets) : 0n, // some txs don't have assets, e.g. ExitQueueEntered
            hash: action.id,
        });
    });

    return interactions;
}

export default async function transactionsHistory(pool: OpusPool, vaults: Hex[]): Promise<Array<VaultTransaction>> {
    const interactionsPromises: Array<Promise<VaultTransaction[]>> = [];
    vaults.forEach((vault: Hex) => {
        const promise = extractTransactionsHistory(pool.connector, vault, pool.userAccount);
        interactionsPromises.push(promise);
    });
    const interactions = await Promise.all(interactionsPromises);
    const allInteractions: Array<VaultTransaction> = [];
    interactions.forEach((chunk: Array<VaultTransaction>) => {
        chunk.forEach((interaction: VaultTransaction) => {
            allInteractions.push(interaction);
        });
    });
    return allInteractions;
}
