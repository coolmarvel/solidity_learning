import { ethers } from "hardhat";

describe("Variable test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Variable = await ethers.getContractFactory("Variable");
    const variable = await Variable.deploy();

    return { owner, variable };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, variable } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await variable.getAddress());
    });

    it("boolean", async () => {
      const { variable } = await deployContract();

      console.log("booleanAnd: ", await variable.booleanAnd());
      console.log("booleanEqual: ", await variable.booleanEqual());
      console.log("booleanNot: ", await variable.booleanNot());
      console.log("booleanNotEqual: ", await variable.booleanNotEqual());
      console.log("booleanOr: ", await variable.booleanOr());
      console.log("booleanValue: ", await variable.booleanValue());
      console.log("defaultBooleanValue:", await variable.defaultBooleanValue());
    });

    it("address", async () => {
      const { variable } = await deployContract();

      console.log("addressValue: ", await variable.addressValue());
      console.log("defaultAddressValue: ", await variable.defaultAddressValue());
    });

    it("byte", async () => {
      const { variable } = await deployContract();

      console.log("defaultByteValue: ", await variable.defaultByteValue());
      console.log("byteValue: ", await variable.byteValue());
    });
  });
});
