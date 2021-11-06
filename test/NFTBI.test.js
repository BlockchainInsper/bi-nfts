const truffleAssert = require("truffle-assertions");
const NFTBI = artifacts.require("NFTBI");

contract("NFTBI Tests", async accounts => {
  it("should not be called by strangers", async () => {
    const instance = await NFTBI.deployed();

    await truffleAssert.fails(instance.mintNFT(accounts[0], "adsadasd", { from: accounts[1] }));
  });
})
