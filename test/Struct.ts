import { ethers } from "hardhat";

describe("Struct test", () => {
  const ETH: string = "0x34d21b1e550D73cee41151c77F3c73359527a396";
  const KDAI: string = "0x5c74070FDeA071359b86082bd9f9b3dEaafbe32b";

  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Struct = await ethers.getContractFactory("Struct");
    const struct = await Struct.deploy();

    return { owner, struct, otherAccount };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, struct, otherAccount } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("otherAccount: ", otherAccount.address);
      console.log("address: ", await struct.getAddress());
    });

    it("Struct", async () => {
      const { struct } = await deployContract();

      console.log("------setUserInfo(user1.address, 10000000)");
      console.log("userInfo", (await struct.userInfo()).toString());
    });

    it("StructArray", async () => {
      const { struct, owner, otherAccount } = await deployContract();

      await struct.setUserInfoArray(owner.address, 10000000);
      await struct.setUserInfoArray(otherAccount.address, 1000);
      console.log("------setUserInfoArray(owner.address, 10000000)");
      console.log("------setUserInfoArray(otherAccount.address, 1000)");
      console.log(
        "userInfoArray[0]",
        (await struct.userInfoArray(0)).toString()
      );
      console.log(
        "userInfoArray[1]",
        (await struct.userInfoArray(1)).toString()
      );
    });

    it("StructMapping", async () => {
      const { struct, owner, otherAccount } = await deployContract();

      await struct.setUserInfoMapping(owner.address, 10000000);
      await struct.setUserInfoMapping(otherAccount.address, 1000);
      console.log("------setUserInfoMapping(owner.address, 10000000)");
      console.log("------setUserInfoMapping(otherAccount.address, 1000)");
      console.log(
        "userInfoMapping[0]",
        (await struct.userInfoMapping(owner.address)).toString()
      );
      console.log(
        "userInfoMapping[1]",
        (await struct.userInfoMapping(otherAccount.address)).toString()
      );
    });

    it("MapArrayStruct", async () => {
      const { struct, owner, otherAccount } = await deployContract();

      await struct.setUserInfoV2(owner.address, ETH, 10000000);
      await struct.setUserInfoV2(otherAccount.address, KDAI, 1000);
      console.log("------setUserInfo1(owner.address, ETH, 10000000)");
      console.log("------setUserInfo1(otherAccount.address, KDAI, 1000)");
      console.log(
        "getUserBalance",
        await struct.getUserBalance(owner.address, ETH)
      );
      console.log(
        "getUserBalance",
        await struct.getUserBalance(otherAccount.address, KDAI)
      );
    });
  });
});
