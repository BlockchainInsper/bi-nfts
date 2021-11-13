const Web3 = require('web3');
const fs = require('fs');
const path = require('path');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const NFTBI = require("../build/contracts/NFTBI");

const privateKey = fs.readFileSync(path.resolve(__dirname, '../.secret')).toString().trim();
const contractAddress = "0x3789C6B18C3C84365238aceAB4399e402D566b0f";
const recipient = "0x0774cdf35E78150D5e292B35cF105784a5EB6A24";
const tokenURI = "https://ipfs.io/ipfs/QmWpMKJsYkkouKgxpprDtMTP5iGGGRejDVsWde6JfGauE3";

const provider = new HDWalletProvider(privateKey, `https://matic-mumbai.chainstacklabs.com/`)
// const provider = new HDWalletProvider(privateKey, "ws://localhost:8545")

const web3 = new Web3(provider);

async function main() {
  // Instantiating contract
  const contractInstance = new web3.eth.Contract(NFTBI.abi, contractAddress)

  // Getting imported accounts
  const accounts = await web3.eth.getAccounts();

  // Buying tokens
  const result = await contractInstance.methods.mintNFT(recipient, tokenURI).send({ from: accounts[0] })

  console.log(result)
}

main()
