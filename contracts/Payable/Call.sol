// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Call {
  function callSetValue(address _address, uint _value) public {
    (bool success, ) = _address.call(abi.encodeWithSignature("setStateValue(uint256)", _value));

    require(success, "Fail");
  }

  function callNonFunction(address _address, uint _value) public {
    (bool success, ) = _address.call(abi.encodeWithSignature("a(uint256)", _value));

    require(success, "Fail");
  }
}
