import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import * as chai from "chai";
import { solidity } from "ethereum-waffle";
import { ethers } from "hardhat";

chai.use(solidity);
const { expect } = chai;

describe.only("tonejs", function () {
  let validSigner: SignerWithAddress;
  let paymentReciever: SignerWithAddress;
  let toneJsContract: any;

  beforeEach(async function () {
    [validSigner, paymentReciever] = await ethers.getSigners();
    const TonejsContract = await ethers.getContractFactory("Tonejs");
    toneJsContract = await TonejsContract.deploy();
  });

  it("setApprovalForAll", async function () {
    await toneJsContract.mint("0x12d036ad270cdd009fA15f82e199Fc685eC6cd9a");
    const meta = await toneJsContract.tokenURI(0);
    console.log(meta);
  });
});
