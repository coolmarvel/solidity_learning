import { ethers } from "hardhat";

describe("Deploy test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Deploy = await ethers.getContractFactory("Deploy");
    const deploy = await Deploy.deploy(1125);

    return { owner, deploy };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, deploy } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await deploy.getAddress());
    });

    it("setStateValue Test ", async () => {
      const { deploy } = await deployContract();
      await deploy.setStateValue(1225);
    });

    it("getStateValue Test ", async () => {
      const { deploy } = await deployContract();

      console.log("stateValue: ", (await deploy.getStateValue()).toString());
    });
  });
});
