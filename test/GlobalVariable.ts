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

      console.log("weiUnit: ", (await variable.weiUnit()).toString());
      console.log("gweiUnit: ", (await variable.gweiUnit()).toString());
      console.log("etherUnit: ", (await variable.etherUnit()).toString());
    });

    it("TIME unit", async () => {
      const { variable } = await deployContract();

      console.log("seconsUnit: ", (await variable.seconsUnit()).toString());
      console.log("minutesUnit: ", (await variable.minutesUnit()).toString());
      console.log("hoursUnit: ", (await variable.hoursUnit()).toString());
      console.log("daysUnit: ", (await variable.daysUnit()).toString());
      console.log("weeksUnit: ", (await variable.weeksUnit()).toString());
    });
  });
});
