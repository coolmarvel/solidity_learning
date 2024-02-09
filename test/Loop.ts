import { ethers } from "hardhat";

describe("Loop test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Loop = await ethers.getContractFactory("Loop");
    const loop = await Loop.deploy();

    return { owner, loop };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, loop } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await loop.getAddress());
    });

    it("sum loop", async () => {
      const { loop } = await deployContract();

      console.log("-----------sumFor()----------");
      console.log((await loop.sumFor()).toString());

      console.log("-----------sumWhile()----------");
      console.log((await loop.sumWhile()).toString());

      console.log("-----------sumDoWhile()----------");
      console.log((await loop.sumDoWhile()).toString());

      console.log("-----------sumForOddNumber()----------");
      console.log((await loop.sumForEvenNumber()).toString());

      console.log("-----------forExample()----------");
      await loop.forExample();

      console.log("-----------sumForBreak()----------");
      console.log((await loop.sumForBreak()).toString());

      console.log("-----------sumForUnchecked()----------");
      console.log((await loop.sumForUnchecked()).toString());
    });
  });
});
