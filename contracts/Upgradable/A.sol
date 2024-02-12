// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../library/OwnableUpgradeable.sol";
import "../library/ReentrancyGuardUpgradeable.sol";
import "../library/EnumerableSet.sol";

contract A {
  uint public num;
  address public sender;

  function callSetVars(address _contract, uint _num) public payable {
    // A's storage is set, B is not modified.
    (bool success, bytes memory data) = _contract.call(abi.encodeWithSignature("setVars(uint256)", _num));
  }

  function delegateCallSetVars(address _contract, uint _num) public payable {
    // A's storage is set, B is not modified.
    (bool success, bytes memory data) = _contract.delegatecall(abi.encodeWithSignature("setVars(uint256)", _num));
  }
}
