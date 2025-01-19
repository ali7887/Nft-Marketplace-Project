import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import NFTMarketplaceABI from "./NFTMarketplace.json";

const App = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [tokenURI, setTokenURI] = useState("");
  const [price, setPrice] = useState("");
  const [nftId, setNftId] = useState("");
  const [listings, setListings] = useState([]);

  const contractAddress = "<DEPLOYED_CONTRACT_ADDRESS>"; // Replace with deployed contract address

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(web3Provider);

        const web3Signer = web3Provider.getSigner();
        setSigner(web3Signer);

        const nftContract = new ethers.Contract(
          contractAddress,
          NFTMarketplaceABI.abi,
          web3Signer
        );
        setContract(nftContract);

        await loadListings(nftContract);
      } else {
        alert("Please install MetaMask to use this application.");
      }
    };

    init();
  }, []);

  const loadListings = async (nftContract) => {
    const tokenCount = await nftContract.currentTokenId();
    const allListings = [];
    for (let tokenId = 1; tokenId <= tokenCount; tokenId++) {
      const listing = await nftContract.listings(tokenId);
      if (!listing.isSold) {
        allListings.push({
          tokenId: listing.tokenId.toString(),
          price: ethers.utils.formatEther(listing.price),
          seller: listing.seller,
        });
      }
    }
    setListings(allListings);
  };

  const connectWallet = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  };

  const mintNFT = async () => {
    try {
      const tx = await contract.mintNFT(tokenURI);
      await tx.wait();
      alert("NFT Minted Successfully!");
      setTokenURI("");
    } catch (error) {
      console.error(error);
      alert("Error minting NFT");
    }
  };

  const listNFT = async () => {
    try {
      const listingFee = await contract.listingFee();
      const tx = await contract.listNFT(nftId, ethers.utils.parseEther(price), {
        value: listingFee,
      });
      await tx.wait();
      alert("NFT Listed Successfully!");
      setNftId("");
      setPrice("");
      await loadListings(contract);
    } catch (error) {
      console.error(error);
      alert("Error listing NFT");
    }
  };

  const buyNFT = async (tokenId, price) => {
    try {
      const tx = await contract.buyNFT(tokenId, {
        value: ethers.utils.parseEther(price),
      });
      await tx.wait();
      alert("NFT Purchased Successfully!");
      await loadListings(contract);
    } catch (error) {
      console.error(error);
      alert("Error buying NFT");
    }
  };

  return (
    <div>
      <h1>NFT Marketplace</h1>
      <button onClick={connectWallet}>Connect Wallet</button>

      <h2>Mint NFT</h2>
      <input
        type="text"
        placeholder="Token URI"
        value={tokenURI}
        onChange={(e) => setTokenURI(e.target.value)}
      />
      <button onClick={mintNFT}>Mint</button>

      <h2>List NFT</h2>
      <input
        type="text"
        placeholder="NFT ID"
        value={nftId}
        onChange={(e) => setNftId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price (ETH)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={listNFT}>List</button>

      <h2>Available Listings</h2>
      {listings.length > 0 ? (
        <ul>
          {listings.map((listing, index) => (
            <li key={index}>
              <p>
                <strong>NFT ID:</strong> {listing.tokenId}
              </p>
              <p>
                <strong>Price:</strong> {listing.price} ETH
              </p>
              <p>
                <strong>Seller:</strong> {listing.seller}
              </p>
              <button onClick={() => buyNFT(listing.tokenId, listing.price)}>
                Buy
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No NFTs available for sale</p>
      )}
    </div>
  );
};

export default App;
