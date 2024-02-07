// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Modifier {
  address private owner;
  uint public a = 5;

  constructor() {
    owner = msg.sender;
  }

  modifier onlyEvenNumber(uint num) {
    require(num % 2 == 0, "num must be even number");
    _;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "Caller is not owner");
    _;
  }

  modifier beforePlus() {
    a += 1;
    _;
  }

  modifier afterMinus() {
    _;
    a -= 2;
  }

  function setEvenNumber(uint num) public view onlyOwner onlyEvenNumber(num) returns (uint) {
    return num;
  }

  function setEvenNumber2(uint num) public view onlyEvenNumber(num) returns (uint) {
    return num;
  }

  function printA() public afterMinus beforePlus {
    // a += 1;
    console.log(a);
    // a -= 1;
  }
}
