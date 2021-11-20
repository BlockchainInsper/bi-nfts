const Web3 = require('web3');
const fs = require('fs');
const path = require('path');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const NFTBI = require("../build/contracts/NFTBI");

const privateKey = fs.readFileSync(path.resolve(__dirname, '../../.secret')).toString().trim();
const contractAddress = "";
const recipient = "";
const tokenURI = "";

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
