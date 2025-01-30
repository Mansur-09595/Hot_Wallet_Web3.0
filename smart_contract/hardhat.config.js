require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: {
    version: "0.8.14",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Isb9FDXXAazx_juDgHwhCqHyHP-j00AX',
      accounts: ['2bb6abc418e2dd82656805df4b8a8c1e08f1be3e80945b27b46d3046f2422079'],    },
  },
};


