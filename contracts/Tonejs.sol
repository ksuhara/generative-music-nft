//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

import "hardhat/console.sol";

contract Tonejs is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;
    using Address for address payable;

    Counters.Counter private _tokenIdTracker;

    // CONSTRUCTOR ---------------------------------------------------

    constructor(
    ) ERC721("Tonejs", "TONE") {
    }
    

    function withdraw(address payable to, uint256 amount) public onlyOwner {
        require(
            address(this).balance >= amount,
            "Ocarinas: Insufficient balance to withdraw"
        );
        if (amount == 0) {
            amount = address(this).balance;
        }
        if (to == address(0)) {
            to = payable(owner());
        }
        to.sendValue(amount);
    }


    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(_exists(tokenId), "Tonejs: nonexistent token");

        string memory html = Base64.encode(abi.encodePacked('<!doctype html><html lang="ja"><head><meta charset="UTF-8"><title>HTML Sample</title><script type="text/javascript" src="https://unpkg.com/tone@14.8.9/build/Tone.js"></script><script>window.addEventListener("load", ()=>{const button = document.querySelector("button"); button.onclick = async ()=>{  await Tone.start();  play(); };}); function play() {const synth = new Tone.Synth().toDestination();  synth.triggerAttackRelease("C4", "8n");}</script></head><body><div class="header">Header</div><div class="main"><button>play</button><h1>h1</h1><p>content</p></div><div class="footer"><span>Footer</span><a href="#">link</a></div></body></html>'));

        bytes memory json = abi.encodePacked(
            '{"name": "Ocarina #',
            tokenId.toString(),
            '", "description": "A unique piece of music represented entirely on-chain in the MIDI format with inspiration from the musical themes and motifs of video games.", "image": "',
            ""
            '", "animation_url": "','data:text/html;base64,',html,
    '"}');
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(json)
                )
            );
    }

    

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenId);
    }


    function mint(
        address to
    ) external payable virtual {
        uint256 tokenID = _tokenIdTracker.current();

        _mint(to, tokenID);
        _tokenIdTracker.increment();
        
    }  

    // EXTRA FUNCTIONS ---------------------------------------------------

    function usedSupply() external view returns (uint256) {
        return _tokenIdTracker.current();
    }
}