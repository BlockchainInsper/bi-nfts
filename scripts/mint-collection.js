const fs = require('fs');
const path = require('path');
const NFTBI = artifacts.require('NFTBI')
const pinataSDK = require('@pinata/sdk');

const pinata = pinataSDK('', '');

const semestre = ""
const metadataPath = `./metadata/${semestre}`;

const owner = ""

module.exports = async callback => {

  const nftInstance = await NFTBI.deployed()

  const files = await fs.promises.readdir(metadataPath);

  for await (const file of files) {
    let fullPath = path.join(metadataPath, file);

    let metadataFile = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

    let result = await pinata.pinJSONToIPFS(metadataFile)

    console.log(`IPFS Hash: ${result["IpfsHash"]}`)

    await nftInstance.mintNFT(owner, `https://ipfs.io/ipfs/${result["IpfsHash"]}`)
  }

  callback(nftInstance)
}
