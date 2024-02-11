// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Animal {
  uint public age;
  string private sex = "male";

  constructor(uint _age) {
    age = _age;
  }

  function animal() public view virtual returns (string memory) {
    return "animal";
  }
}

contract Dog is Animal(5) {
  function getNumberOfLegs() public view returns (uint) {
    return age;
  }

  function moveOneYear() public {
    age++;
  }

  function animal() public pure override returns (string memory) {
    return "dog";
  }

  function originalAnimal() public view returns (string memory) {
    return super.animal();
  }
}

contract Cat is Animal {
  uint public catAge = 10;

  constructor() Animal(catAge) {}
}

contract Hipo is Animal {
  constructor(uint _age) Animal(_age) {}
}
