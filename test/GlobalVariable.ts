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

    it("Block data", async () => {
      const { variable } = await deployContract();

      console.log("blockNumber: ", (await variable.blockNumber()).toString());
      console.log("baseFee: ", (await variable.baseFee()).toString());
      console.log("blockHash: ", (await variable.blockHash()).toString());
      console.log("oldBlockHash: ", (await variable.oldBlockHash()).toString());
      console.log("chainId: ", (await variable.chainId()).toString());
      console.log("addressCoinbase: ", (await variable.addressCoinbase()).toString());
      console.log("blockDifficulty: ", (await variable.blockDifficulty()).toString());
      console.log("gasLimit: ", (await variable.gasLimit()).toString());
      console.log("blockTimestamp: ", (await variable.blockTimestamp()).toString());
    });

    it("Message data", async () => {
      const { variable } = await deployContract();

      await variable.msgTest(1, { value: 1 });

      console.log("msgData: ", (await variable.msgData()).toString());
      console.log("msgSender: ", (await variable.msgSender()).toString());
      console.log("msgSig: ", (await variable.msgSig()).toString());
      console.log("msgValue: ", (await variable.msgValue()).toString());
    });

    it("Transaction data", async () => {
      const { variable } = await deployContract();

      console.log("gasPrice: ", (await variable.gasPrice()).toString());
      console.log("origin: ", (await variable.origin()).toString());
    });
  });
});
