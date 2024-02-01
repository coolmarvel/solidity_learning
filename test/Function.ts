import { ethers } from "hardhat";

describe("Function1 test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Function1 = await ethers.getContractFactory("Function1");
    const function1 = await Function1.deploy();

    return { owner, function1 };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, function1 } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await function1.getAddress());
    });

    it("function1", async () => {
      const { function1 } = await deployContract();

      console.log("stateValue: ", await function1.stateValue());

      await function1.function1();

      await function1.functionParam(55);

      await function1.publicFunction();

      await function1.externalFunction();
    });
  });
});
