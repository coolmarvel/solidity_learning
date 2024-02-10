// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Payable {
  uint public stateValue;

  function setStateValue(uint _stateValue) public {
    stateValue = _stateValue;
  }

  function getBalance(address _address) public view returns (uint) {
    return _address.balance;
  }

  function getMsgValue() public payable returns (uint) {
    return msg.value;
  }

  function sendETH(address payable _address) public payable {
    bool result = _address.send(10 ether);

    require(result, "Fail");

    console.log(address(this).balance);
  }

  function transferETH(address payable _address) public payable {
    _address.transfer(msg.value);
  }

  function callETH(address _address) public payable {
    (bool result, ) = _address.call{value: msg.value}("");

    require(result, "Fail");
  }

  receive() external payable {
    console.log("receive", msg.value, msg.sender);
  }

  fallback() external {
    console.log("fallback");
  }
}
