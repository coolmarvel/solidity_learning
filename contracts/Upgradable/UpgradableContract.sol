// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../library/OwnableUpgradeable.sol";
import "../library/ReentrancyGuardUpgradeable.sol";

contract UpgradableContract is OwnableUpgradeable, ReentrancyGuardUpgradeable {
  uint public stateValue1;
  uint public stateValue2;
  uint public upgradeValue;

  function initialize() external initializer {
    __Ownable_init();
    __ReentrancyGuard_init();
    stateValue1 = 3;
    stateValue2 = 5;
  }

  function a() public {
    stateValue1 = 15;
    stateValue2 = 15;
    upgradeValue = 8;
  }
}
