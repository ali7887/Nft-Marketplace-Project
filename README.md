# NFT Marketplace

![NFT Marketplace](https://img.shields.io/badge/Blockchain-Ethereum-blue)
![License](https://img.shields.io/badge/License-MIT-green)

A decentralized NFT marketplace built on Ethereum, allowing users to mint, buy, and sell NFTs securely and transparently.

---

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Smart Contracts](#smart-contracts)
7. [Frontend](#frontend)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

---

## Introduction
The **NFT Marketplace** is a decentralized application (dApp) that allows users to:
- **Mint** NFTs by uploading digital files (e.g., images, videos).
- **List** NFTs for sale at a fixed price or auction.
- **Buy** and **sell** NFTs using cryptocurrency (e.g., Ethereum).

This project demonstrates the power of blockchain technology in creating transparent and secure marketplaces for digital assets.

---

## Features
- **Mint NFTs**: Users can mint NFTs by uploading files and adding metadata.
- **List NFTs**: Sellers can list their NFTs for sale at a fixed price or auction.
- **Buy NFTs**: Buyers can purchase NFTs using cryptocurrency.
- **Decentralized**: Built on Ethereum, ensuring transparency and security.
- **IPFS Integration**: NFT metadata is stored on IPFS for decentralized storage.

---

## Technologies Used
- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity
- **Frontend**: React.js, Web3.js
- **Backend**: Hardhat (for smart contract development and testing)
- **Storage**: IPFS (for storing NFT metadata)
- **Wallet Integration**: MetaMask

---

## Installation
To run this project locally, follow these steps:

### Prerequisites
- Node.js and npm installed.
- MetaMask browser extension.
- Ethereum testnet account (e.g., Sepolia) with test ETH.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nft-marketplace.git
   cd nft-marketplace

npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
cd frontend
npm install
npm start
http://localhost:3000
 
