import { ethers } from "hardhat";

describe("Mapping test", () => {
  const ETH: string = "0x34d21b1e550D73cee41151c77F3c73359527a396";
  const KDAI: string = "0x5c74070FDeA071359b86082bd9f9b3dEaafbe32b";

  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Mapping = await ethers.getContractFactory("Mapping");
    const mapping = await Mapping.deploy();

    return { owner, mapping };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, mapping } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await mapping.getAddress());
    });

    it("Mapping", async () => {
      const { owner, mapping } = await deployContract();

      await mapping.setBalances(owner, 10000000);
      console.log("------setBalances(owner.address, 10000000)");
      console.log(
        "balances[owner]",
        (await mapping.balances(owner.address)).toString()
      );

      await mapping.setBalances(owner.address, 10);
      console.log("------setBalances(owner.address, 10)");
      console.log(
        "balances[owner]",
        (await mapping.balances(owner.address)).toString()
      );

      await mapping.deleteBalances(owner.address);
      console.log("------deleteBalances(owner.address)");
      console.log(
        "balances[owner]",
        (await mapping.balances(owner.address)).toString()
      );
    });

    it("Double Mapping", async () => {
      const { owner, mapping } = await deployContract();

      await mapping.setTokenBalances(owner.address, ETH, BigInt(10 ** 18));
      await mapping.setTokenBalances(owner.address, KDAI, BigInt(10 ** 18));
      console.log(
        "balances[ETH][owner]",
        (await mapping.tokenBalances(owner.address, ETH)).toString()
      );
      console.log(
        "balances[KDAI][owner]",
        (await mapping.tokenBalances(owner.address, KDAI)).toString()
      );

      await mapping.deleteTokenBalances(owner.address, ETH);
      await mapping.deleteTokenBalances(owner.address, KDAI);
      console.log("------deleteBalances(owner.address)");
      console.log(
        "balances[ETH][owner]",
        (await mapping.tokenBalances(owner.address, ETH)).toString()
      );
      console.log(
        "balances[KDAI][owner]",
        (await mapping.tokenBalances(owner.address, KDAI)).toString()
      );
    });
  });
});
