// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "../library/OwnableUpgradeable.sol";
import "../library/ReentrancyGuardUpgradeable.sol";

import "../interfaces/IStateContract.sol";
import "../interfaces/IStakingContract.sol";

contract LogicContract is OwnableUpgradeable, ReentrancyGuardUpgradeable {
  IStateContract public stateContract;
  IStakingContract public stakingContract;

  modifier onlyWhiteList() {
    require(stateContract.isWhiteList(msg.sender), "caller must be whitelist");
    _;
  }

  function initialize() external initializer {
    __Ownable_init();
    __ReentrancyGuard_init();
  }

  function setStateContract(address _address) external onlyOwner {
    require(AddressUpgradeable.isContract(_address), "StateContract: The address must be a valid contract address");
    stateContract = IStateContract(_address);
  }

  function setStakingContract(address _address) external onlyOwner {
    require(AddressUpgradeable.isContract(_address), "StateContract: The address must be a valid contract address");
    stakingContract = IStakingContract(_address);
  }

  function withdraw(uint _amount) public onlyWhiteList {
    require(stateContract.checkAmount(msg.sender, _amount), "invalid amount");
    stateContract.withdraw(msg.sender, _amount);
    stakingContract.withdraw(msg.sender, _amount);
  }
}
