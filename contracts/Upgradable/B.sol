// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract B {
  uint public num;
  address public sender;

  function setVars(uint _num) public payable {
    console.log("inner", msg.sender);
    num = _num;
    sender = msg.sender;
  }
}
