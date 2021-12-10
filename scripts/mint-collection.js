const fs = require('fs');
const path = require('path');
const NFTBI = artifacts.require('NFTBI')
const pinataSDK = require('@pinata/sdk');

const pinata = pinataSDK('', '');

const semestre = "2021.2"
const metadataPath = `./metadata/${semestre}`;
const dataPath = `./scripts/${semestre}`;

module.exports = async callback => {

  const nftInstance = await NFTBI.deployed()

  const files = await fs.promises.readdir(metadataPath);
  const data = JSON.parse(fs.readFileSync(path.join(dataPath, "data.json"), 'utf8'));

  for await (const file of files) {
    let fullPath = path.join(metadataPath, file);
    let fileNumber = file.replace(/\.[^/.]+$/, "")

    let metadataFile = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

    let result = await pinata.pinJSONToIPFS(metadataFile)

    console.log(`IPFS Hash: ${result["IpfsHash"]}`, data[fileNumber].wallet)

    await nftInstance.mintNFT(data[fileNumber].wallet, `https://ipfs.io/ipfs/${result["IpfsHash"]}`)
  }

  callback(nftInstance)
}
