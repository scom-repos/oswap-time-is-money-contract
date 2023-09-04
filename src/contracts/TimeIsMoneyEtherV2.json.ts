export default {
"abi":[
{"inputs":[{"internalType":"uint256","name":"maximumTotalLock_","type":"uint256"},{"internalType":"uint256","name":"minimumLockTime_","type":"uint256"},{"internalType":"uint256","name":"startOfEntryPeriod_","type":"uint256"},{"internalType":"uint256","name":"endOfEntryPeriod_","type":"uint256"},{"internalType":"uint256","name":"perAddressCap_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"heldLongEnough","type":"bool"}],"name":"Withdrawal","type":"event"},
{"inputs":[],"name":"endOfEntryPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCredit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"lock","outputs":[],"stateMutability":"payable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lockAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"maximumTotalLock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"minimumLockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"perAddressCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"readyToWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"releaseTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"startOfEntryPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"totalLocked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"bool","name":"allowWithdrawalBeforeRelease","type":"bool"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"withdrawn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}
],
"bytecode":"61012060405234801561001157600080fd5b50604051610ee3380380610ee383398101604081905261003091610050565b600160005560809490945260a09290925260c05260e0526101005261008f565b600080600080600060a08688031215610067578081fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b60805160a05160c05160e05161010051610ded6100f66000396000818161018d015261097b01526000818161011e01526107d50152600081816102aa015261074b0152600081816102de0152610b2a0152600081816102760152610a0c0152610ded6000f3fe6080604052600436106100d25760003560e01c80636ef610921161007f578063cbc2efbe11610059578063cbc2efbe14610264578063e76a5de014610298578063ed6d0c5b146102cc578063f435f5a71461030057600080fd5b80636ef61092146101e557806395bc3bd014610215578063a810a54c1461024257600080fd5b806347dd5172116100b057806347dd51721461017b57806356891412146101af57806357344e6f146101c557600080fd5b80630a469e7a146100d7578063302ef3f31461010c57806334265c481461014e575b600080fd5b3480156100e357600080fd5b506100f76100f2366004610cc5565b610313565b60405190151581526020015b60405180910390f35b34801561011857600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610103565b34801561015a57600080fd5b50610140610169366004610cc5565b60036020526000908152604090205481565b34801561018757600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b3480156101bb57600080fd5b5061014060015481565b3480156101d157600080fd5b506101406101e0366004610cc5565b6103a4565b3480156101f157600080fd5b506100f7610200366004610cc5565b60046020526000908152604090205460ff1681565b34801561022157600080fd5b50610140610230366004610cc5565b60026020526000908152604090205481565b34801561024e57600080fd5b5061026261025d366004610d00565b610402565b005b34801561027057600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b3480156102a457600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b3480156102d857600080fd5b506101407f000000000000000000000000000000000000000000000000000000000000000081565b61026261030e366004610cc5565b6106d6565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600260205260408120541580159061036c575073ffffffffffffffffffffffffffffffffffffffff82166000908152600360205260409020544210155b801561039e575073ffffffffffffffffffffffffffffffffffffffff821660009081526004602052604090205460ff16155b92915050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600360205260408120544210156103d957506000919050565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205490565b60026000541415610474576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260009081553381526004602052604090205460ff161580156104a657503360009081526002602052604090205415155b61050c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4e6f2065746865727320617661696c61626c6520746f2077697468647261772e604482015260640161046b565b3360009081526002602090815260408083205460039092529091205442101561063d57816105bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f596f7572206574686572732077657265206e6f74206c6f636b6564206c6f6e6760448201527f20656e6f75676821000000000000000000000000000000000000000000000000606482015260840161046b565b33600090815260026020908152604080832083905560039091528120819055600180548392906105ed908490610d71565b909155506105fd90503382610bb6565b604080518281526000602082015233917f06e0c61e7e9f4912ee1f3ce060b59207b98f9a232d711462af3166aeeed1250a910160405180910390a26106cd565b33600081815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905561067f9082610bb6565b336000818152600260209081526040918290205482519081526001918101919091527f06e0c61e7e9f4912ee1f3ce060b59207b98f9a232d711462af3166aeeed1250a910160405180910390a25b50506001600055565b60026000541415610743576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161046b565b6002600055347f00000000000000000000000000000000000000000000000000000000000000004210156107d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4974277320746f6f206561726c7920746f20646f207468697321000000000000604482015260640161046b565b7f0000000000000000000000000000000000000000000000000000000000000000421061085c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f536f7272792c20796f752061746520746f6f206c617465210000000000000000604482015260640161046b565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600260205260409020541561090f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f596f75206861766520616c72656164792070617274696369706174656420696e60448201527f20746869732e0000000000000000000000000000000000000000000000000000606482015260840161046b565b60008111610979576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f596f752063616e6e6f74206c6f636b206e6f7468696e67210000000000000000604482015260640161046b565b7f0000000000000000000000000000000000000000000000000000000000000000811115610a03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f596f752063616e6e6f74206c6f636b206f76657220746865206c696d69742100604482015260640161046b565b600154610a30907f0000000000000000000000000000000000000000000000000000000000000000610d71565b811115610ae5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604760248201527f54686973206465706f73697420776f756c64206361757365206f757220746f7460448201527f616c206c6f636b656420616d6f756e7420746f2065786365656420746865206d60648201527f6178696d756d2e00000000000000000000000000000000000000000000000000608482015260a40161046b565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260026020526040812082905560018054839290610b1f908490610d59565b90915550610b4f90507f000000000000000000000000000000000000000000000000000000000000000042610d59565b73ffffffffffffffffffffffffffffffffffffffff8316600081815260036020908152604091829020939093555183815233927f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f62910160405180910390a350506001600055565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff8416908390604051610bed9190610d20565b60006040518083038185875af1925050503d8060008114610c2a576040519150601f19603f3d011682016040523d82523d6000602084013e610c2f565b606091505b5050905080610cc0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f5472616e7366657248656c7065723a204554485f5452414e534645525f46414960448201527f4c45440000000000000000000000000000000000000000000000000000000000606482015260840161046b565b505050565b600060208284031215610cd6578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610cf9578182fd5b9392505050565b600060208284031215610d11578081fd5b81358015158114610cf9578182fd5b60008251815b81811015610d405760208186018101518583015201610d26565b81811115610d4e5782828501525b509190910192915050565b60008219821115610d6c57610d6c610d88565b500190565b600082821015610d8357610d83610d88565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212201b97a3e16186053242635ca83934909c7b54b5c7b7d7bba899c2db90ddbe7eb364736f6c63430008040033"
}