// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Error {
  function executeAssert(bool isAssert) public pure {
    assert(isAssert);
  }
  // Error: VM Exception while processing transaction: reverted with panic code 0x1 (Assertion error)

  function dividedByZero(uint num1, uint num2) public pure {
    num1 / num2;
  }
  // Error: VM Exception while processing transaction: reverted with panic code 0x12 (Division or modulo division by zero)

  function overflow(uint8 num1) public pure {
    num1 + 1;
  }
  // Error: VM Exception while processing transaction: reverted with panic code 0x11 (Arithmetic operation underflowed or overflowed outside of an unchecked block)

  function executeRevert(uint num) public pure {
    if (num <= 0) revert("Revert: num must be gt 0");
  }

  function executeRequire(uint num) public pure {
    require(num > 0, "Require: num must be gt 0");
  }
}
