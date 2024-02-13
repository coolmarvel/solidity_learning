import { ethers } from "hardhat";

describe("DelegateCall Test", () => {
  let a: any;
  let b: any;
  let owner: any;

  before(async () => {
    const [_owner] = await ethers.getSigners();
    owner = _owner;

    const A = await ethers.getContractFactory("A", owner);
    const B = await ethers.getContractFactory("B", owner);
    a = await A.deploy();
    b = await B.deploy();
  });

  it.skip("call", async () => {
    console.log("a address: ", a.address);
    console.log("owner address: ", owner.address);
    console.log("------------------------------");

    await a.callSetVars(b.address, 33);
    console.log("b.num: ", await b.num());
    console.log("b.sender: ", await b.sender());
    console.log("a.num: ", await a.num());
    console.log("a.sender: ", await a.sender());
  });

  it("delegate call", async () => {
    console.log("a.address: ", a.address);
    console.log("owner address: ", owner.address);
    console.log("------------------------------");

    await a.delegateCallSetVars(b.address, 33);
    console.log("b.num: ", await b.num());
    console.log("b.sender: ", await b.sender());
    console.log("a.num: ", await a.num());
    console.log("a.sender: ", await a.sender());
  });
});
