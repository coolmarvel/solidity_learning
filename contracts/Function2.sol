// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import 'hardhat/console.sol';

contract Function2 {
  uint stateValue = 30;

  function pureFunction(uint a) public pure {
    uint b = a;
    console.log('b: ', b);
  }

  function viewFunction(uint a) public view {
    uint b = a + stateValue;
    console.log('b: ', b);
  }
}
