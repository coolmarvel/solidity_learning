// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

abstract contract Vehicle {
  uint public carYear;

  function carYearCheck() public virtual;
}

contract Cayenne is Vehicle {
  function carYearCheck() public override {
    carYear = 21;
  }
}
