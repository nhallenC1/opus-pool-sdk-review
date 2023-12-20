export const keeperABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "configIpfsHash",
          "type": "string"
        }
      ],
      "name": "ConfigUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "EIP712DomainChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "vault",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "exitSignaturesIpfsHash",
          "type": "string"
        }
      ],
      "name": "ExitSignaturesUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "vault",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "rewardsRoot",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "int256",
          "name": "totalAssetsDelta",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "unlockedMevDelta",
          "type": "uint256"
        }
      ],
      "name": "Harvested",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        }
      ],
      "name": "OracleAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        }
      ],
      "name": "OracleRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oracles",
          "type": "uint256"
        }
      ],
      "name": "RewardsMinOraclesUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "rewardsRoot",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "avgRewardPerSecond",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "updateTimestamp",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "nonce",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "rewardsIpfsHash",
          "type": "string"
        }
      ],
      "name": "RewardsUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "vault",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "exitSignaturesIpfsHash",
          "type": "string"
        }
      ],
      "name": "ValidatorsApproval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oracles",
          "type": "uint256"
        }
      ],
      "name": "ValidatorsMinOraclesUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        }
      ],
      "name": "addOracle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "validatorsRegistryRoot",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "validators",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "signatures",
              "type": "bytes"
            },
            {
              "internalType": "string",
              "name": "exitSignaturesIpfsHash",
              "type": "string"
            }
          ],
          "internalType": "struct IKeeperValidators.ApprovalParams",
          "name": "params",
          "type": "tuple"
        }
      ],
      "name": "approveValidators",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vault",
          "type": "address"
        }
      ],
      "name": "canHarvest",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "canUpdateRewards",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "eip712Domain",
      "outputs": [
        {
          "internalType": "bytes1",
          "name": "fields",
          "type": "bytes1"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "version",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "verifyingContract",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "salt",
          "type": "bytes32"
        },
        {
          "internalType": "uint256[]",
          "name": "extensions",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vault",
          "type": "address"
        }
      ],
      "name": "exitSignaturesNonces",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "rewardsRoot",
              "type": "bytes32"
            },
            {
              "internalType": "int160",
              "name": "reward",
              "type": "int160"
            },
            {
              "internalType": "uint160",
              "name": "unlockedMevReward",
              "type": "uint160"
            },
            {
              "internalType": "bytes32[]",
              "name": "proof",
              "type": "bytes32[]"
            }
          ],
          "internalType": "struct IKeeperRewards.HarvestParams",
          "name": "params",
          "type": "tuple"
        }
      ],
      "name": "harvest",
      "outputs": [
        {
          "internalType": "int256",
          "name": "totalAssetsDelta",
          "type": "int256"
        },
        {
          "internalType": "uint256",
          "name": "unlockedMevDelta",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "harvested",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vault",
          "type": "address"
        }
      ],
      "name": "isCollateralized",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vault",
          "type": "address"
        }
      ],
      "name": "isHarvestRequired",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        }
      ],
      "name": "isOracle",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastRewardsTimestamp",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "prevRewardsRoot",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        }
      ],
      "name": "removeOracle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vault",
          "type": "address"
        }
      ],
      "name": "rewards",
      "outputs": [
        {
          "internalType": "int192",
          "name": "assets",
          "type": "int192"
        },
        {
          "internalType": "uint64",
          "name": "nonce",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardsDelay",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardsMinOracles",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardsNonce",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rewardsRoot",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_rewardsMinOracles",
          "type": "uint256"
        }
      ],
      "name": "setRewardsMinOracles",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_validatorsMinOracles",
          "type": "uint256"
        }
      ],
      "name": "setValidatorsMinOracles",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalOracles",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vault",
          "type": "address"
        }
      ],
      "name": "unlockedMevRewards",
      "outputs": [
        {
          "internalType": "uint192",
          "name": "assets",
          "type": "uint192"
        },
        {
          "internalType": "uint64",
          "name": "nonce",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "configIpfsHash",
          "type": "string"
        }
      ],
      "name": "updateConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "vault",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "exitSignaturesIpfsHash",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "oraclesSignatures",
          "type": "bytes"
        }
      ],
      "name": "updateExitSignatures",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "rewardsRoot",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "avgRewardPerSecond",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "updateTimestamp",
              "type": "uint64"
            },
            {
              "internalType": "string",
              "name": "rewardsIpfsHash",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "signatures",
              "type": "bytes"
            }
          ],
          "internalType": "struct IKeeperRewards.RewardsUpdateParams",
          "name": "params",
          "type": "tuple"
        }
      ],
      "name": "updateRewards",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "validatorsMinOracles",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ] as const;
