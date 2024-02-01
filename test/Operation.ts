import { ethers } from "hardhat";

describe("Operation test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Operation = await ethers.getContractFactory("Operation");
    const operation = await Operation.deploy();

    return { owner, operation };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, operation } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await operation.getAddress());
    });

    it("single", async () => {
      const { operation } = await deployContract();

      console.log("suffix: ", (await operation.suffix()).toString());
      console.log("prefix: ", (await operation.prefix()).toString());
      console.log("not: ", await operation.not());
    });

    it("arithmetic", async () => {
      const { operation } = await deployContract();

      console.log("d: ", (await operation.d()).toString());
      console.log("e: ", (await operation.e()).toString());
      console.log("f: ", (await operation.f()).toString());
      console.log("g: ", (await operation.g()).toString());
      console.log("h: ", (await operation.h()).toString());
      console.log("i: ", (await operation.i()).toString());
    });

    it("bit", async () => {
      const { operation } = await deployContract();

      console.log("byteA: ", (await operation.byteA()).toString());
      console.log("byteB: ", (await operation.byteB()).toString());
      console.log("a1: ", (await operation.a1()).toString());
      console.log("a2: ", (await operation.a2()).toString());
      console.log("a3: ", (await operation.a3()).toString());
      console.log("a4: ", (await operation.a4()).toString());
      console.log("a5: ", (await operation.a5()).toString());
      console.log("a6: ", (await operation.a6()).toString());
    });

    it("compare", async () => {
      const { operation } = await deployContract();

      console.log("c: ", (await operation.c()).toString());
      console.log("c1: ", (await operation.c1()).toString());
      console.log("c2: ", (await operation.c2()).toString());
      console.log("c3: ", (await operation.c3()).toString());
      console.log("c4: ", (await operation.c4()).toString());
      console.log("c5: ", (await operation.c5()).toString());
    });

    it("three", async () => {
      const { operation } = await deployContract();

      console.log("d1: ", (await operation.d1()).toString());
      console.log("d2: ", (await operation.d2()).toString());
    });

    it("change", async () => {
      const { operation } = await deployContract();

      console.log("z: ", (await operation.z()).toString());
      await operation.change();
      console.log("z: ", (await operation.z()).toString());
    });
  });
});
