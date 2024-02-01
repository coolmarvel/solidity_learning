import { ethers } from "hardhat";

describe("Function2 test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Function2 = await ethers.getContractFactory("Function2");
    const function2 = await Function2.deploy();

    return { owner, function2 };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, function2 } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await function2.getAddress());
    });

    it("function2", async () => {
      const { function2 } = await deployContract();

      await function2.pureFunction(4);
      await function2.viewFunction(4);
    });
  });
});
