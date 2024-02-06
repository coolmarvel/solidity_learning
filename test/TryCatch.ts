import { ethers } from "hardhat";

describe("TryCatch test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Runner = await ethers.getContractFactory("Runner");
    const Runner2 = await ethers.getContractFactory("Runner2");
    const Runner3 = await ethers.getContractFactory("Runner3");

    const runner = await Runner.deploy();
    const runner2 = await Runner2.deploy();
    const runner3 = await Runner3.deploy();

    return { owner, runner, runner2, runner3 };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, runner, runner2, runner3 } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address(runner): ", await runner.getAddress());
      console.log("address(runner2): ", await runner2.getAddress());
      console.log("address(runner3): ", await runner3.getAddress());
    });

    it("external function", async () => {
      const { runner } = await deployContract();

      await runner.executeTryCatch(100, 0);
      await runner.executeTryCatch(5, 0);
    });

    it("external contract", async () => {
      const { runner2 } = await deployContract();

      await runner2.executeTryCatch();
    });

    it("internal function", async () => {
      const { runner3 } = await deployContract();

      await runner3.executeTryCatch();
    });
  });
});
