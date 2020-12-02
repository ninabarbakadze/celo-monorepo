import Web3 from 'web3'
import { Validators as ValidatorsType } from '../types/Validators'
export default async function getInstance(web3: Web3, account: string | null = null) {
  const contract = (new web3.eth.Contract(
    [
      {
        constant: true,
        inputs: [
          {
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'validatorAddressFromCurrentSet',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'initialized',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'sender',
            type: 'address',
          },
          {
            name: 'blsKey',
            type: 'bytes',
          },
          {
            name: 'blsPop',
            type: 'bytes',
          },
        ],
        name: 'checkProofOfPossession',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'membershipHistoryLength',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'maxGroupSize',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'registry',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'numberValidatorsInCurrentSet',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'isOwner',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getEpochNumber',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'registryAddress',
            type: 'address',
          },
        ],
        name: 'setRegistry',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'validatorLockedGoldRequirements',
        outputs: [
          {
            name: 'value',
            type: 'uint256',
          },
          {
            name: 'duration',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'groupLockedGoldRequirements',
        outputs: [
          {
            name: 'value',
            type: 'uint256',
          },
          {
            name: 'duration',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getEpochSize',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'aNumerator',
            type: 'uint256',
          },
          {
            name: 'aDenominator',
            type: 'uint256',
          },
          {
            name: 'bNumerator',
            type: 'uint256',
          },
          {
            name: 'bDenominator',
            type: 'uint256',
          },
          {
            name: 'exponent',
            type: 'uint256',
          },
          {
            name: '_decimals',
            type: 'uint256',
          },
        ],
        name: 'fractionMulExp',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'transferOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: 'size',
            type: 'uint256',
          },
        ],
        name: 'MaxGroupSizeSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'ValidatorEpochPaymentSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: 'exponent',
            type: 'uint256',
          },
          {
            indexed: false,
            name: 'adjustmentSpeed',
            type: 'uint256',
          },
        ],
        name: 'ValidatorScoreParametersSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: 'value',
            type: 'uint256',
          },
          {
            indexed: false,
            name: 'duration',
            type: 'uint256',
          },
        ],
        name: 'GroupLockedGoldRequirementsSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: 'value',
            type: 'uint256',
          },
          {
            indexed: false,
            name: 'duration',
            type: 'uint256',
          },
        ],
        name: 'ValidatorLockedGoldRequirementsSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: 'length',
            type: 'uint256',
          },
        ],
        name: 'MembershipHistoryLengthSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'validator',
            type: 'address',
          },
          {
            indexed: false,
            name: 'ecdsaPublicKey',
            type: 'bytes',
          },
          {
            indexed: false,
            name: 'blsPublicKey',
            type: 'bytes',
          },
        ],
        name: 'ValidatorRegistered',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'validator',
            type: 'address',
          },
        ],
        name: 'ValidatorDeregistered',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'validator',
            type: 'address',
          },
          {
            indexed: true,
            name: 'group',
            type: 'address',
          },
        ],
        name: 'ValidatorAffiliated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'validator',
            type: 'address',
          },
          {
            indexed: true,
            name: 'group',
            type: 'address',
          },
        ],
        name: 'ValidatorDeaffiliated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'validator',
            type: 'address',
          },
          {
            indexed: false,
            name: 'ecdsaPublicKey',
            type: 'bytes',
          },
        ],
        name: 'ValidatorEcdsaPublicKeyUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'validator',
            type: 'address',
          },
          {
            indexed: false,
            name: 'blsPublicKey',
            type: 'bytes',
          },
        ],
        name: 'ValidatorBlsPublicKeyUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'group',
            type: 'address',
          },
          {
            indexed: false,
            name: 'commission',
            type: 'uint256',
          },
        ],
        name: 'ValidatorGroupRegistered',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'group',
            type: 'address',
          },
        ],
        name: 'ValidatorGroupDeregistered',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'group',
            type: 'address',
          },
          {
            indexed: true,
            name: 'validator',
            type: 'address',
          },
        ],
        name: 'ValidatorGroupMemberAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'group',
            type: 'address',
          },
          {
            indexed: true,
            name: 'validator',
            type: 'address',
          },
        ],
        name: 'ValidatorGroupMemberRemoved',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'group',
            type: 'address',
          },
          {
            indexed: true,
            name: 'validator',
            type: 'address',
          },
        ],
        name: 'ValidatorGroupMemberReordered',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'group',
            type: 'address',
          },
          {
            indexed: false,
            name: 'commission',
            type: 'uint256',
          },
        ],
        name: 'ValidatorGroupCommissionUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'registryAddress',
            type: 'address',
          },
        ],
        name: 'RegistrySet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'registryAddress',
            type: 'address',
          },
          {
            name: 'groupRequirementValue',
            type: 'uint256',
          },
          {
            name: 'groupRequirementDuration',
            type: 'uint256',
          },
          {
            name: 'validatorRequirementValue',
            type: 'uint256',
          },
          {
            name: 'validatorRequirementDuration',
            type: 'uint256',
          },
          {
            name: 'validatorScoreExponent',
            type: 'uint256',
          },
          {
            name: 'validatorScoreAdjustmentSpeed',
            type: 'uint256',
          },
          {
            name: '_membershipHistoryLength',
            type: 'uint256',
          },
          {
            name: '_maxGroupSize',
            type: 'uint256',
          },
        ],
        name: 'initialize',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'size',
            type: 'uint256',
          },
        ],
        name: 'setMaxGroupSize',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'length',
            type: 'uint256',
          },
        ],
        name: 'setMembershipHistoryLength',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'exponent',
            type: 'uint256',
          },
          {
            name: 'adjustmentSpeed',
            type: 'uint256',
          },
        ],
        name: 'setValidatorScoreParameters',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getMaxGroupSize',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'value',
            type: 'uint256',
          },
          {
            name: 'duration',
            type: 'uint256',
          },
        ],
        name: 'setGroupLockedGoldRequirements',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'value',
            type: 'uint256',
          },
          {
            name: 'duration',
            type: 'uint256',
          },
        ],
        name: 'setValidatorLockedGoldRequirements',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'ecdsaPublicKey',
            type: 'bytes',
          },
          {
            name: 'blsPublicKey',
            type: 'bytes',
          },
          {
            name: 'blsPop',
            type: 'bytes',
          },
        ],
        name: 'registerValidator',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getValidatorScoreParameters',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'getMembershipHistory',
        outputs: [
          {
            name: '',
            type: 'uint256[]',
          },
          {
            name: '',
            type: 'address[]',
          },
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'signer',
            type: 'address',
          },
          {
            name: 'uptime',
            type: 'uint256',
          },
        ],
        name: 'updateValidatorScoreFromSigner',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'signer',
            type: 'address',
          },
          {
            name: 'maxPayment',
            type: 'uint256',
          },
        ],
        name: 'distributeEpochPaymentsFromSigner',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'deregisterValidator',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'group',
            type: 'address',
          },
        ],
        name: 'affiliate',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'deaffiliate',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'blsPublicKey',
            type: 'bytes',
          },
          {
            name: 'blsPop',
            type: 'bytes',
          },
        ],
        name: 'updateBlsPublicKey',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'account',
            type: 'address',
          },
          {
            name: 'signer',
            type: 'address',
          },
          {
            name: 'ecdsaPublicKey',
            type: 'bytes',
          },
        ],
        name: 'updateEcdsaPublicKey',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'commission',
            type: 'uint256',
          },
        ],
        name: 'registerValidatorGroup',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'deregisterValidatorGroup',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'validator',
            type: 'address',
          },
        ],
        name: 'addMember',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'validator',
            type: 'address',
          },
          {
            name: 'lesser',
            type: 'address',
          },
          {
            name: 'greater',
            type: 'address',
          },
        ],
        name: 'addFirstMember',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'validator',
            type: 'address',
          },
        ],
        name: 'removeMember',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'validator',
            type: 'address',
          },
          {
            name: 'lesserMember',
            type: 'address',
          },
          {
            name: 'greaterMember',
            type: 'address',
          },
        ],
        name: 'reorderMember',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'commission',
            type: 'uint256',
          },
        ],
        name: 'updateCommission',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'getAccountLockedGoldRequirement',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'meetsAccountLockedGoldRequirements',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'signer',
            type: 'address',
          },
        ],
        name: 'getValidatorBlsPublicKeyFromSigner',
        outputs: [
          {
            name: 'blsPublicKey',
            type: 'bytes',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'getValidator',
        outputs: [
          {
            name: 'ecdsaPublicKey',
            type: 'bytes',
          },
          {
            name: 'blsPublicKey',
            type: 'bytes',
          },
          {
            name: 'affiliation',
            type: 'address',
          },
          {
            name: 'score',
            type: 'uint256',
          },
          {
            name: 'signer',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'getValidatorGroup',
        outputs: [
          {
            name: '',
            type: 'address[]',
          },
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'getGroupNumMembers',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'account',
            type: 'address',
          },
          {
            name: 'n',
            type: 'uint256',
          },
        ],
        name: 'getTopGroupValidators',
        outputs: [
          {
            name: '',
            type: 'address[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'accounts',
            type: 'address[]',
          },
        ],
        name: 'getGroupsNumMembers',
        outputs: [
          {
            name: '',
            type: 'uint256[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getNumRegisteredValidators',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getValidatorLockedGoldRequirements',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getGroupLockedGoldRequirements',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getRegisteredValidators',
        outputs: [
          {
            name: '',
            type: 'address[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getRegisteredValidatorSigners',
        outputs: [
          {
            name: '',
            type: 'address[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getRegisteredValidatorGroups',
        outputs: [
          {
            name: '',
            type: 'address[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'isValidatorGroup',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'isValidator',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'signer',
            type: 'address',
          },
        ],
        name: 'getMembershipInLastEpochFromSigner',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'getMembershipInLastEpoch',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ],
    '0xF4c234e4d3eF330774Ba97315eEDF3B6Cc23E085'
  ) as unknown) as ValidatorsType
  contract.options.from = account || (await web3.eth.getAccounts())[0]
  return contract
}