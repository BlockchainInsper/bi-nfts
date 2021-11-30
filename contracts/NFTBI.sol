// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTBI is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private tokenIds;

  constructor() ERC721("Blockchain Insper NFTs", "NFTBI") {}

  function mintNFT(address _owner, string memory _tokenURI) public onlyOwner returns (uint256) {
    tokenIds.increment();

    uint256 newItemId = tokenIds.current();
    _mint(_owner, newItemId);
    _setTokenURI(newItemId, _tokenURI);

    return newItemId;
  }

  function changeTokenURI(uint256 _tokenId, string memory _tokenURI) public onlyOwner {
    _setTokenURI(_tokenId, _tokenURI);
  }
}
