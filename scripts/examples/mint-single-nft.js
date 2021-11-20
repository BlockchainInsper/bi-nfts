const NFTBI = artifacts.require('NFTBI')

const ipfsMetadataLink = ""

const owner = ""

module.exports = async callback => {

  const nftInstance = await NFTBI.deployed()

  await nftInstance.mintNFT(owner, ipfsMetadataLink)

  callback(nftInstance)
}
