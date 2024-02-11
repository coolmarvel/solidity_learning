// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract GrandMom {}

contract Mom is GrandMom {
  uint a = 5;

  function f() public view virtual returns (uint) {
    return a * 2;
  }
}

contract Dad {
  uint b = 10;

  function f() public view virtual returns (uint) {
    return b * 3;
  }
}

contract Son1 is Dad, Mom {
  function f() public view override(Dad, Mom) returns (uint) {
    return a + b;
  }
}

contract Son2 is Dad, Mom {
  function f() public view override(Dad, Mom) returns (uint) {
    return super.f();
  }
}
