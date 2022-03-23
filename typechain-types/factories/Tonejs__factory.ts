/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Tonejs, TonejsInterface } from "../Tonejs";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usedSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805180820182526006815265546f6e656a7360d01b602080830191825283518085019094526004845263544f4e4560e01b9084015281519192916200005c91600091620000eb565b50805162000072906001906020840190620000eb565b5050506200008f620000896200009560201b60201c565b62000099565b620001ce565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000f99062000191565b90600052602060002090601f0160209004810192826200011d576000855562000168565b82601f106200013857805160ff191683800117855562000168565b8280016001018555821562000168579182015b82811115620001685782518255916020019190600101906200014b565b50620001769291506200017a565b5090565b5b808211156200017657600081556001016200017b565b600181811c90821680620001a657607f821691505b60208210811415620001c857634e487b7160e01b600052602260045260246000fd5b50919050565b6121d480620001de6000396000f3fe6080604052600436106101445760003560e01c806370a08231116100c0578063b88d4fde11610074578063e985e9c511610059578063e985e9c514610358578063f2fde38b146103a1578063f3fef3a3146103c157600080fd5b8063b88d4fde14610318578063c87b56dd1461033857600080fd5b80638da5cb5b116100a55780638da5cb5b146102c557806395d89b41146102e3578063a22cb465146102f857600080fd5b806370a0823114610290578063715018a6146102b057600080fd5b806323b872dd116101175780635d3dc8af116100fc5780635d3dc8af1461023a5780636352211e1461025d5780636a6278421461027d57600080fd5b806323b872dd146101fa57806342842e0e1461021a57600080fd5b806301ffc9a71461014957806306fdde031461017e578063081812fc146101a0578063095ea7b3146101d8575b600080fd5b34801561015557600080fd5b50610169610164366004611d1f565b6103e1565b60405190151581526020015b60405180910390f35b34801561018a57600080fd5b5061019361047e565b6040516101759190611fd0565b3480156101ac57600080fd5b506101c06101bb366004611d59565b610510565b6040516001600160a01b039091168152602001610175565b3480156101e457600080fd5b506101f86101f3366004611b66565b6105aa565b005b34801561020657600080fd5b506101f8610215366004611bcb565b6106dc565b34801561022657600080fd5b506101f8610235366004611bcb565b610763565b34801561024657600080fd5b5061024f61077e565b604051908152602001610175565b34801561026957600080fd5b506101c0610278366004611d59565b61078e565b6101f861028b366004611b42565b610819565b34801561029c57600080fd5b5061024f6102ab366004611b42565b610842565b3480156102bc57600080fd5b506101f86108dc565b3480156102d157600080fd5b506006546001600160a01b03166101c0565b3480156102ef57600080fd5b50610193610942565b34801561030457600080fd5b506101f8610313366004611cec565b610951565b34801561032457600080fd5b506101f8610333366004611c0c565b61095c565b34801561034457600080fd5b50610193610353366004611d59565b6109ea565b34801561036457600080fd5b50610169610373366004611b92565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156103ad57600080fd5b506101f86103bc366004611b42565b610e04565b3480156103cd57600080fd5b506101f86103dc366004611b66565b610ee6565b60006001600160e01b031982167f80ac58cd00000000000000000000000000000000000000000000000000000000148061044457506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061047857507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b60606000805461048d90612071565b80601f01602080910402602001604051908101604052809291908181526020018280546104b990612071565b80156105065780601f106104db57610100808354040283529160200191610506565b820191906000526020600020905b8154815290600101906020018083116104e957829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661058e5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006105b58261078e565b9050806001600160a01b0316836001600160a01b0316141561063f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610585565b336001600160a01b038216148061065b575061065b8133610373565b6106cd5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610585565b6106d78383610fee565b505050565b6106e63382611069565b6107585760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610585565b6106d7838383611160565b6106d78383836040518060200160405280600081525061095c565b600061078960075490565b905090565b6000818152600260205260408120546001600160a01b0316806104785760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610585565b600061082460075490565b9050610830828261133a565b61083e600780546001019055565b5050565b60006001600160a01b0382166108c05760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610585565b506001600160a01b031660009081526003602052604090205490565b6006546001600160a01b031633146109365760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610585565b6109406000611489565b565b60606001805461048d90612071565b61083e3383836114e8565b6109663383611069565b6109d85760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610585565b6109e4848484846115b7565b50505050565b6000818152600260205260409020546060906001600160a01b0316610a515760405162461bcd60e51b815260206004820152601960248201527f546f6e656a733a206e6f6e6578697374656e7420746f6b656e000000000000006044820152606401610585565b6000610da3604051602001610d8f907f3c21646f63747970652068746d6c3e3c68746d6c206c616e673d226a61223e3c81527f686561643e3c6d65746120636861727365743d225554462d38223e3c7469746c60208201527f653e48544d4c2053616d706c653c2f7469746c653e3c7363726970742074797060408201527f653d22746578742f6a61766173637269707422207372633d2268747470733a2f60608201527f2f756e706b672e636f6d2f746f6e654031342e382e392f6275696c642f546f6e60808201527f652e6a73223e3c2f7363726970743e3c7363726970743e77696e646f772e616460a08201527f644576656e744c697374656e657228226c6f6164222c2028293d3e7b636f6e7360c08201527f7420627574746f6e203d20646f63756d656e742e717565727953656c6563746f60e08201527f722822627574746f6e22293b20627574746f6e2e6f6e636c69636b203d2061736101008201527f796e632028293d3e7b2020617761697420546f6e652e737461727428293b20206101208201527f706c617928293b207d3b7d293b2066756e6374696f6e20706c61792829207b636101408201527f6f6e73742073796e7468203d206e657720546f6e652e53796e746828292e746f6101608201527f44657374696e6174696f6e28293b202073796e74682e747269676765724174746101808201527f61636b52656c6561736528224334222c2022386e22293b7d3c2f7363726970746101a08201527f3e3c2f686561643e3c626f64793e3c64697620636c6173733d226865616465726101c08201527f223e4865616465723c2f6469763e3c64697620636c6173733d226d61696e223e6101e08201527f3c627574746f6e3e706c61793c2f627574746f6e3e3c68313e68313c2f68313e6102008201527f3c703e636f6e74656e743c2f703e3c2f6469763e3c64697620636c6173733d226102208201527f666f6f746572223e3c7370616e3e466f6f7465723c2f7370616e3e3c612068726102408201527f65663d2223223e6c696e6b3c2f613e3c2f6469763e3c2f626f64793e3c2f68746102608201527f6d6c3e00000000000000000000000000000000000000000000000000000000006102808201526102830190565b604051602081830303815290604052611640565b90506000610db084611794565b82604051602001610dc2929190611de3565b6040516020818303038152906040529050610ddc81611640565b604051602001610dec9190611d9e565b60405160208183030381529060405292505050919050565b6006546001600160a01b03163314610e5e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610585565b6001600160a01b038116610eda5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610585565b610ee381611489565b50565b6006546001600160a01b03163314610f405760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610585565b80471015610fb65760405162461bcd60e51b815260206004820152602a60248201527f4f636172696e61733a20496e73756666696369656e742062616c616e6365207460448201527f6f207769746864726177000000000000000000000000000000000000000000006064820152608401610585565b80610fbe5750475b6001600160a01b038216610fdb576006546001600160a01b031691505b61083e6001600160a01b038316826118c6565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03841690811790915581906110308261078e565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166110e25760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610585565b60006110ed8361078e565b9050806001600160a01b0316846001600160a01b031614806111285750836001600160a01b031661111d84610510565b6001600160a01b0316145b8061115857506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166111738261078e565b6001600160a01b0316146111ef5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610585565b6001600160a01b03821661126a5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610585565b611275600082610fee565b6001600160a01b038316600090815260036020526040812080546001929061129e90849061202e565b90915550506001600160a01b03821660009081526003602052604081208054600192906112cc908490611fe3565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b0382166113905760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610585565b6000818152600260205260409020546001600160a01b0316156113f55760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610585565b6001600160a01b038216600090815260036020526040812080546001929061141e908490611fe3565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600680546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316141561154a5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610585565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6115c2848484611160565b6115ce848484846119df565b6109e45760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610585565b606081516000141561166057505060408051602081019091526000815290565b600060405180606001604052806040815260200161215f604091399050600060038451600261168f9190611fe3565b6116999190611ffb565b6116a490600461200f565b67ffffffffffffffff8111156116bc576116bc61211d565b6040519080825280601f01601f1916602001820160405280156116e6576020820181803683370190505b509050600182016020820185865187015b80821015611752576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f81168501518453506001830192506116f7565b505060038651066001811461176e576002811461178157611789565b603d6001830353603d6002830353611789565b603d60018303535b509195945050505050565b6060816117d457505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b81156117fe57806117e8816120ac565b91506117f79050600a83611ffb565b91506117d8565b60008167ffffffffffffffff8111156118195761181961211d565b6040519080825280601f01601f191660200182016040528015611843576020820181803683370190505b5090505b84156111585761185860018361202e565b9150611865600a866120c7565b611870906030611fe3565b60f81b81838151811061188557611885612107565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506118bf600a86611ffb565b9450611847565b804710156119165760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610585565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611963576040519150601f19603f3d011682016040523d82523d6000602084013e611968565b606091505b50509050806106d75760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610585565b60006001600160a01b0384163b15611b3757604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611a23903390899088908890600401611f9e565b602060405180830381600087803b158015611a3d57600080fd5b505af1925050508015611a6d575060408051601f3d908101601f19168201909252611a6a91810190611d3c565b60015b611b1d573d808015611a9b576040519150601f19603f3d011682016040523d82523d6000602084013e611aa0565b606091505b508051611b155760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610585565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611158565b506001949350505050565b600060208284031215611b5457600080fd5b8135611b5f81612133565b9392505050565b60008060408385031215611b7957600080fd5b8235611b8481612133565b946020939093013593505050565b60008060408385031215611ba557600080fd5b8235611bb081612133565b91506020830135611bc081612133565b809150509250929050565b600080600060608486031215611be057600080fd5b8335611beb81612133565b92506020840135611bfb81612133565b929592945050506040919091013590565b60008060008060808587031215611c2257600080fd5b8435611c2d81612133565b93506020850135611c3d81612133565b925060408501359150606085013567ffffffffffffffff80821115611c6157600080fd5b818701915087601f830112611c7557600080fd5b813581811115611c8757611c8761211d565b604051601f8201601f19908116603f01168101908382118183101715611caf57611caf61211d565b816040528281528a6020848701011115611cc857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215611cff57600080fd5b8235611d0a81612133565b915060208301358015158114611bc057600080fd5b600060208284031215611d3157600080fd5b8135611b5f81612148565b600060208284031215611d4e57600080fd5b8151611b5f81612148565b600060208284031215611d6b57600080fd5b5035919050565b60008151808452611d8a816020860160208601612045565b601f01601f19169290920160200192915050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815260008251611dd681601d850160208701612045565b91909101601d0192915050565b7f7b226e616d65223a20224f636172696e61202300000000000000000000000000815260008351611e1b816013850160208801612045565b7f222c20226465736372697074696f6e223a20224120756e6971756520706965636013918401918201527f65206f66206d7573696320726570726573656e74656420656e746972656c792060338201527f6f6e2d636861696e20696e20746865204d49444920666f726d6174207769746860538201527f20696e737069726174696f6e2066726f6d20746865206d75736963616c20746860738201527f656d657320616e64206d6f74696673206f6620766964656f2067616d65732e2260938201527f2c2022696d616765223a2022000000000000000000000000000000000000000060b38201527f222c2022616e696d6174696f6e5f75726c223a2022000000000000000000000060bf8201527f646174613a746578742f68746d6c3b6261736536342c0000000000000000000060d48201528351611f628160ea840160208801612045565b611f9460ea828401017f227d000000000000000000000000000000000000000000000000000000000000815260020190565b9695505050505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611f946080830184611d72565b602081526000611b5f6020830184611d72565b60008219821115611ff657611ff66120db565b500190565b60008261200a5761200a6120f1565b500490565b6000816000190483118215151615612029576120296120db565b500290565b600082821015612040576120406120db565b500390565b60005b83811015612060578181015183820152602001612048565b838111156109e45750506000910152565b600181811c9082168061208557607f821691505b602082108114156120a657634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156120c0576120c06120db565b5060010190565b6000826120d6576120d66120f1565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610ee357600080fd5b6001600160e01b031981168114610ee357600080fdfe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa26469706673582212207fcc54b7abf0c97906cf37e61a94bb630421c3ed37184ef7e787d5dec5f682a864736f6c63430008060033";

type TonejsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TonejsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Tonejs__factory extends ContractFactory {
  constructor(...args: TonejsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Tonejs";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Tonejs> {
    return super.deploy(overrides || {}) as Promise<Tonejs>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Tonejs {
    return super.attach(address) as Tonejs;
  }
  connect(signer: Signer): Tonejs__factory {
    return super.connect(signer) as Tonejs__factory;
  }
  static readonly contractName: "Tonejs";
  public readonly contractName: "Tonejs";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TonejsInterface {
    return new utils.Interface(_abi) as TonejsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Tonejs {
    return new Contract(address, _abi, signerOrProvider) as Tonejs;
  }
}