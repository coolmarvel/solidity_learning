import { ethers } from "hardhat";

describe("Event test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Event = await ethers.getContractFactory("Event");
    const event = await Event.deploy();

    return { owner, event };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, event } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await event.getAddress());
    });

    it("Borrow", async () => {
      const { owner, event } = await deployContract();

      let ETH = "0x34d21b1e550D73cee41151c77F3c73359527a396";
      let amount = 10 * 1e18;

      await event.borrow(1, ETH, amount.toString());
    });
  });
});
