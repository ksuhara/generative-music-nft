//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Tonejs is ERC721, Ownable {
  using Counters for Counters.Counter;
  using Strings for uint256;
  using Address for address payable;

  Counters.Counter private _tokenIdTracker;

  mapping(uint256 => address) public seedAddresses;
  mapping(uint256 => uint256) public seedTokenIds;

  string public imageUrlBase;
  string public animationUrlBase;
  bytes public tonejsTxhash;

  constructor(string memory _imageUrlBase, string memory _animationUrlBase) ERC721("Tonejs", "TONE") {
    imageUrlBase = _imageUrlBase;
    animationUrlBase = _animationUrlBase;
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    require(_exists(tokenId), "Tonejs: nonexistent token");

    //TODO: set music logic
    string
      memory html = '<!DOCTYPE html><html lang="en"><head></head><body><script>console.log("a");</script><h1>Test</h1></body></html>';

    address seedAddress = seedAddresses[tokenId];

    bytes memory json = abi.encodePacked(
      '{"name": "Tonejs #',
      tokenId.toString(),
      '", "description": "A unique piece of music represented entirely on-chain.",', 
      '"image": "',imageUrlBase, '?seedAddress=',seedAddress,"&seedTokenId=",seedTokenIds[tokenId].toString(),'"',
      ',"animation_url": "',animationUrlBase, '?seedAddress=',seedAddress,"&seedTokenId=",seedTokenIds[tokenId].toString(),'"',
      ',"audio":"data:text/html ',html,
      '"}'
    );
    return string(abi.encodePacked("data:application/json;base64,", Base64.encode(json)));
  }

  function mint(
    address to,
    address seedAddress,
    uint256 seedTokenId
  ) external payable virtual {
    uint256 tokenId = _tokenIdTracker.current();

    seedAddresses[tokenId]=seedAddress;
    seedTokenIds[tokenId]=seedTokenId;
    _mint(to, tokenId);
    _tokenIdTracker.increment();
  }

  function setTonejsTx(bytes memory _tonejsTxhash) public onlyOwner {
    tonejsTxhash = _tonejsTxhash;
  }

  function withdraw() public onlyOwner {
    payable(msg.sender).transfer(address(this).balance);
  }
}
