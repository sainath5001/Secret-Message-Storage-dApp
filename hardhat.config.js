require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL, // Replace with your Sepolia RPC URL
      accounts: [process.env.PRIVATE_KEY] // Replace with your private key
    },
    // Add other networks as needed
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY // Optional, if you want to verify contracts on Etherscan
  }
};

