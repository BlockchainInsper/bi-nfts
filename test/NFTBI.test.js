const truffleAssert = require("truffle-assertions");
const NFTBI = artifacts.require("NFTBI");

contract("NFTBI Tests", async accounts => {
  it("owner can mint new NFTs", async () => {
    const instance = await NFTBI.deployed();

    await truffleAssert.passes(instance.mintNFT(accounts[0], "tokenUri", { from: accounts[0] }));
  })

  it("owner can change token URI", async () => {
    const instance = await NFTBI.deployed();

    await truffleAssert.passes(instance.changeTokenURI(1, "tokenUri2", { from: accounts[0] }));
  })

  it("minting should not be called by strangers", async () => {
    const instance = await NFTBI.deployed();

    await truffleAssert.fails(instance.mintNFT(accounts[0], "adsadasd", { from: accounts[1] }));
  });

  it("changing token URI should not be called by strangers", async () => {
    const instance = await NFTBI.deployed();

    await truffleAssert.fails(instance.changeTokenURI(1, "adsadasd", { from: accounts[1] }));
  });
})
