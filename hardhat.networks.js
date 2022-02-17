const networks = {
  hardhat: {
    blockGasLimit: 200000000,
    allowUnlimitedContractSize: true,
    chainId: 31337
  },
  ganache: {
    url: 'http://127.0.0.1:8545',
    blockGasLimit: 200000000,
    allowUnlimitedContractSize: false,
    chainId: 1337
  },
  rskregtest: {
    url: 'http://127.0.0.1:4444',
    blockGasLimit: 68000000,
    allowUnlimitedContractSize: false,
    chainId: 33
  },
  ropsten: {
    url: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    blockGasLimit: 200000000,
    allowUnlimitedContractSize: false,
    chainId: 3,
    accounts: ['91855cc27eff2699415687d291f6dc486fc12647587eba9c16d8ecb961004f92']
  },
  fantom: {
    url: 'https://rpc.testnet.fantom.network/',
    blockGasLimit: 200000000,
    allowUnlimitedContractSize: false,
    chainId: 4002,
    accounts: ['91855cc27eff2699415687d291f6dc486fc12647587eba9c16d8ecb961004f92'],
    timeout: 300000,
  },
}

if (process.env.HDWALLET_MNEMONIC) {
  networks.rsktestnet = {
    url: 'https://public-node.testnet.rsk.co',
    blockGasLimit: 6800000,
    gas: 6800000,
    allowUnlimitedContractSize: false,
    chainId: 31,
    accounts: {
      mnemonic: process.env.HDWALLET_MNEMONIC
    }
  }
  networks.rskmainnet = {
    url: 'https://public-node.rsk.co',
    blockGasLimit: 6800000,
    gas: 6800000,
    allowUnlimitedContractSize: false,
    chainId: 30,
    accounts: {
      mnemonic: process.env.HDWALLET_MNEMONIC
    }
  }
} else {
  console.warn('No hdwallet available for testnet and mainnet')
}

module.exports = networks