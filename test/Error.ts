import { ethers } from "hardhat";

describe("Error test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Error = await ethers.getContractFactory("Error");
    const error = await Error.deploy();

    return { owner, error };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, error } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await error.getAddress());
    });

    it("executeAssert", async () => {
      const { error } = await deployContract();

      await error.executeAssert(false);
    });

    it("devidedByZero", async () => {
      const { error } = await deployContract();

      await error.devidedByZero(1, 0);
    });

    it("overflow", async () => {
      const { error } = await deployContract();

      await error.overflow(255);
    });

    it("executeRevert", async () => {
      const { error } = await deployContract();

      await error.executeRevert(0);
    });

    it("executeRequire", async () => {
      const { error } = await deployContract();

      await error.executeRequire(0);
    });
  });
});
