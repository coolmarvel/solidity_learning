import { ethers } from "hardhat";

describe("GlobalVariable test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Variable = await ethers.getContractFactory("GlobalVariable");
    const variable = await Variable.deploy();

    return { owner, variable };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, variable } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await variable.getAddress());
    });

    it("ETH unit", async () => {
      const { variable } = await deployContract();

      console.log("wei: ", (await variable.weiUnit()).toString());
      console.log("gwei: ", (await variable.gweiUnit()).toString());
      console.log("ether: ", (await variable.etherUnit()).toString());
    });
  });
});
