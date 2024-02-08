// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Event {
  event Borrow(uint indexed index, address indexed user, address token, uint amount);

  function borrow(uint index, address token, uint amount) public {
    emit Borrow(index, msg.sender, token, amount);
  }
}
