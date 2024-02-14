//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../library/OwnableUpgradeable.sol";
import "../library/ReentrancyGuardUpgradeable.sol";
import "../library/Constant.sol";
import "../interfaces/ILogicContract.sol";

contract StateContract is OwnableUpgradeable, ReentrancyGuardUpgradeable {
  uint public whiteListCount;

  ILogicContract public logicContract;

  mapping(address => bool) whiteList;
  mapping(address => Constant.whiteListInfo) whiteListInfos;

  modifier onlyLogic() {
    require(msg.sender == address(logicContract));
    _;
  }

  function initialize() external initializer {
    __Ownable_init();
    __ReentrancyGuard_init();
  }

  function setLogicContract(address _address) external onlyOwner {
    require(AddressUpgradeable.isContract(_address), "StateContract: The address must be a valid contract address");
    logicContract = ILogicContract(_address);
  }

  function setWhiteList(address _address) external onlyOwner {
    if (!whiteList[_address]) {
      whiteList[_address] = true;
      whiteListInfos[_address].id = whiteListCount++;
    }
  }

  function isWhiteList(address _address) external view returns (bool) {
    return whiteList[_address];
  }

  function getWhiteListInfo(address _address) external view returns (Constant.whiteListInfo memory whiteListInfo) {
    whiteListInfo = whiteListInfos[_address];
  }

  function deposit(address _address, uint amount) public onlyLogic {
    whiteListInfos[_address].amount += amount;
  }

  function withdraw(address _address, uint amount) public onlyLogic {
    whiteListInfos[_address].amount -= amount;
  }

  function checkAmount(address _address, uint amount) public view returns (bool) {
    return whiteListInfos[_address].amount >= amount;
  }
}
