import { ethers } from "hardhat";

describe("Conditional test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Conditional = await ethers.getContractFactory("Conditional");
    const conditional = await Conditional.deploy();

    return { owner, conditional };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, conditional } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await conditional.getAddress());
    });

    it("conditional Test ", async () => {
      const { conditional } = await deployContract();

      console.log("pass", await conditional.pass());
      await conditional.setScore(63);
      await conditional.setPass1();

      console.log("-----------setScore(63)----------");
      console.log("pass", await conditional.pass());
      await conditional.setScore(59);
      await conditional.setPass2();

      console.log("-----------setScore(59)----------");
      console.log("pass", await conditional.pass());
      await conditional.setGrade1();
      console.log("grade", await conditional.grade());
      await conditional.setScore(81);
      await conditional.setGrade2();

      console.log("-----------setScore(81)----------");
      console.log("grade", await conditional.grade());
      console.log("pass", await conditional.pass());
    });
  });
});
