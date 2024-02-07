import { ethers } from "hardhat";

describe("Array test", () => {
  async function deployContract() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Array = await ethers.getContractFactory("Array");
    const array = await Array.deploy();

    return { owner, array };
  }

  describe("Deployment", () => {
    it("base", async () => {
      const { owner, array } = await deployContract();

      console.log("owner: ", owner.address);
      console.log("address: ", await array.getAddress());
    });

    it("Static Array Test ", async () => {
      const { array } = await deployContract();

      console.log("array1[0]", await array.array1(0));
      console.log("array1[1]", await array.array1(1));
      console.log("array1[2]", await array.array1(2));
      console.log("array1[3]", await array.array1(3));
      console.log("array1[4]", await array.array1(4));

      console.log("array1.length", (await array.getArray1Length()).toString());
    });

    it("Dynamic Array Test", async () => {
      const { array } = await deployContract();

      console.log("array2.length", (await array.getArray2Length()).toString());

      await array.pushArray2(1000000);
      console.log("-----------pushArray2(1000000)----------");
      console.log("array2[0]", (await array.array2(0)).toString());
      console.log("array2.length", (await array.getArray2Length()).toString());

      await array.setArray2(0, 1);
      console.log("-----------setArray(0,1)----------");
      console.log("array2[0]", (await array.array2(0)).toString());

      await array.popArray2();
      console.log("-----------popArray2()----------");
      console.log("array2.length", (await array.getArray2Length()).toString());

      await array.pushArray2(12);
      console.log("-----------setArray(0,12)----------");
      console.log("array2[0]", (await array.array2(0)).toString());

      await array.deleteArray2(0);
      console.log("-----------deleteArray2(0)----------");

      console.log("array2[0]", (await array.array2(0)).toString());
      console.log("array2.length", (await array.getArray2Length()).toString());
    });

    it("String Byte Test", async () => {
      const { array } = await deployContract();

      console.log("b1 b2 b3", (await array.getBytes()).toString());
      console.log("equal result", await array.equalResult());
    });
  });
});
