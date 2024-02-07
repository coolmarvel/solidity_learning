// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Mapping {
  mapping(address => uint) public balances;
  mapping(address => mapping(address => uint)) public tokenBalances;

  function setBalances(address user, uint amount) public {
    balances[user] = amount;
  }

  function deleteBalances(address user) public {
    delete balances[user];
  }

  function setTokenBalances(address user, address token, uint amount) public {
    tokenBalances[user][token] = amount;
  }

  function deleteTokenBalances(address user, address token) public {
    delete tokenBalances[user][token];
  }
}
