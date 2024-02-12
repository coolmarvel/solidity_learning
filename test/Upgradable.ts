import { ethers } from "hardhat";
import Web3 from "Web3";

describe("Upgrade", function () {
  const web3 = new Web3("https://api.baobab.klaytn.net:8651");

  let owner: any;
  let upgrade: any;
  let proxyAdmin: any;

  before(async function () {
    [owner] = await ethers.getSigners();
    upgrade = await ethers.getContractAt(
      "UpgradableContract",
      "0x711DDE471cc272822E9fD44A329a6ca37F5f58B4"
    );
  });

  it("check admin & logic Contract", async function () {
    console.log(
      await web3.eth.getStorageAt(
        upgrade.address,
        "0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103"
      )
    );
    console.log(
      await web3.eth.getStorageAt(
        upgrade.address,
        "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"
      )
    );
  });

  it("check Value", async function () {
    // await upgrade.a();
    console.log((await upgrade.stateValue1()).toString());
    console.log((await upgrade.stateValue2()).toString());
    console.log((await upgrade.upgradeValue()).toString());
  });
});
