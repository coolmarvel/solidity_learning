// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "../library/OwnableUpgradeable.sol";
import "../library/ReentrancyGuardUpgradeable.sol";
import "../interfaces/ILogicContract.sol";

contract StakingContract is OwnableUpgradeable, ReentrancyGuardUpgradeable {
  ILogicContract public logicContract;

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

  function deposit(uint _amount) external payable onlyLogic {
    // do something
  }

  function withdraw(address _address, uint _amount) external onlyLogic {
    payable(_address).transfer(_amount);
  }
}
