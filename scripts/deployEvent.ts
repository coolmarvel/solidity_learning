import { ethers } from "hardhat";

const main = async () => {
  const Event = await ethers.getContractFactory("Event");

  const event = await Event.deploy();
  await event.deployed();
  console.log("address: ", event.address);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
