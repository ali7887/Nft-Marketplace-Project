require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load environment variables from .env file

// Environment variables
const ANKR_URL = process.env.ANKR_URL; // Ankr URL
const PRIVATE_KEY = process.env.PRIVATE_KEY; // Wallet private key
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY; // Etherscan API key (for contract verification)
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY; // CoinMarketCap API key (for gas reporter)

module.exports = {
  solidity: "0.8.28", // Solidity version
  networks: {
    // Local Hardhat network (default)
    hardhat: {
      chainId: 31337, // Default chain ID for Hardhat
    },
    // Sepolia testnet
    sepolia: {
      url: ANKR_URL, // Ankr endpoint
      accounts: [PRIVATE_KEY], // Wallet private key
      chainId: 11155111, // Sepolia chain ID
    },
    // Mainnet (Ethereum)
    mainnet: {
      url: ANKR_URL, // Ankr endpoint
      accounts: [PRIVATE_KEY], // Wallet private key
      chainId: 1, // Mainnet chain ID
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY, // Etherscan API key for contract verification
  },
  gasReporter: {
    enabled: true, // Enable gas reporter
    currency: "USD", // Currency for gas cost estimation
    coinmarketcap: COINMARKETCAP_API_KEY, // CoinMarketCap API key
  },
  mocha: {
    timeout: 20000, // Timeout for Mocha tests
  },
};