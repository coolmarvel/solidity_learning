// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Struct {
  struct UserInfo {
    address user;
    uint balance;
    uint lastUpdateTime;
  }

  UserInfo public userInfo;

  function setUserInfo(address _user, uint _balance) public {
    userInfo.user = _user;
    userInfo.balance = _balance;
    userInfo.lastUpdateTime = block.timestamp;
  }

  UserInfo[] public userInfoArray;

  function setUserInfoArray(address _user, uint _balance) public {
    UserInfo memory _userInfo;
    _userInfo.user = _user;
    _userInfo.balance = _balance;
    _userInfo.lastUpdateTime = block.timestamp;

    userInfoArray.push(_userInfo);
  }

  struct UserBalance {
    uint balance;
    uint lastUpdateTime;
  }

  mapping(address => UserBalance) public userInfoMapping;

  function setUserInfoMapping(address _user, uint _balance) public {
    UserBalance memory _userBalance;
    _userBalance.balance = _balance;
    _userBalance.lastUpdateTime = block.timestamp;

    userInfoMapping[_user] = _userBalance;
  }

  struct UserInfoV2 {
    address[] token;
    mapping(address => uint) tokenBalance;
    uint lastUpdateTime;
  }

  mapping(address => UserInfoV2) public userList;

  function setUserInfoV2(address _user, address _token, uint _balance) public {
    userList[_user].token.push(_token);
    userList[_user].tokenBalance[_token] = _balance;
    userList[_user].lastUpdateTime = block.timestamp;
  }

  function getUserBalance(address _user, address _token) public view returns (uint) {
    return userList[_user].tokenBalance[_token];
  }

  enum Status {
    Stop,
    Running,
    Pending
  }

  Status status = Status.Stop;

  bool public isStop = status == Status.Stop;
}
