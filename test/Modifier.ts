import { ethers } from "hardhat";

describe("Modifier test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Modifier = await ethers.getContractFactory("Modifier");
    const modifier = await Modifier.deploy();

    return { owner, modifier, otherAccount };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, modifier } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await modifier.getAddress());
    });

    it("modifier(onlyEvenNumber)", async () => {
      const { modifier, otherAccount } = await deployContract();

      await modifier.connect(otherAccount).setEvenNumber2(4);
    });

    it("modifier(onlyOwner)", async () => {
      const { owner, modifier } = await deployContract();

      await modifier.connect(owner).setEvenNumber(4);
    });

    it("printA -> modifier(beforePlus, afterMinus)", async () => {
      const { modifier } = await deployContract();

      await modifier.printA();
      console.log((await modifier.a()).toString());
    });
  });
});
