import { ethers } from "hardhat";
import { Contract } from "ethers";

describe("Payable test", () => {
  let owner: any;

  let payable: any;
  let call: any;

  before(async () => {
    [owner] = await ethers.getSigners();

    const Payable = await ethers.getContractFactory("Payable");
    const Call = await ethers.getContractFactory("Call");

    payable = await Payable.deploy();
    call = await Call.deploy();
  });

  describe("Deployment", () => {
    it("base", async () => {
      console.log("owner: ", owner.address);
      console.log("address(payable): ", await payable.address);
      console.log("address(call): ", await call.address);
    });

    it("getBalance", async () => {
      console.log(await payable.getBalance(payable.address));
    });

    it("getMsgValue", async () => {
      await payable.getMsgValue({ value: 1000000 });
      console.log("after ", await payable.getBalance(payable.address));
    });

    it("sendETH", async () => {
      await payable.sendETH(owner.address, { value: (10 * 1e18).toString() });
    });

    it("transferETH", async () => {
      await payable.transferETH(owner.address, { value: 3000000 });
      console.log("after: ", await payable.getBalance(payable.address));
    });

    it("callETH", async () => {
      await payable.callETH(owner.address, { value: 2000000 });
      console.log("after: ", await payable.getBalance(payable.address));
    });

    it("callSetValue", async () => {
      await call.callSetValue(payable.address, 100);
      console.log((await payable.stateValue()).toString());
    });

    it("receive", async () => {
      await owner.sendTransaction({ to: payable.address, value: 3000 });
    });

    it("fallback", async () => {
      await call.callNonFunction(payable.address, 3000000);
    });
  });
});
