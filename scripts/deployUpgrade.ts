import { ethers, upgrades } from "hardhat";

const main = async () => {
  const stateContract = await ethers.getContractFactory("StateContract");
  const state = await upgrades.deployProxy(stateContract);
  await state.deployed();
  console.log(`stateAddress: ${state.address}`);

  const logicContract = await ethers.getContractFactory("LogicContract");
  const logic = await upgrades.deployProxy(logicContract);
  await logic.deployed();
  console.log(`logicAddress: ${logic.address}`);

  const stakingContract = await ethers.getContractFactory("StakingContract");
  const staking = await upgrades.deployProxy(stakingContract);
  await staking.deployed();
  console.log(`stakingAddress: ${staking.address}`);
};

main();
