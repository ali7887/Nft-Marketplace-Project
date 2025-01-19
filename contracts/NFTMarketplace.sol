// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is ERC721URIStorage, Ownable {
    uint256 public listingFee;

    constructor(string memory name, string memory symbol, address initialOwner) ERC721(name, symbol) Ownable(initialOwner) {
        // Initialize any other state variables if needed
    }

    function updateListingFee(uint256 _listingFee) external onlyOwner {
        listingFee = _listingFee;
    }

    // Add other functions and logic for your NFT marketplace here
}