// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract GlobalVariable {
  // ETH unit
  uint public weiUnit = 1 wei; // == 1
  uint public gweiUnit = 1 gwei; // == 1e9
  uint public etherUnit = 1 ether; // == 1e18

  // TIME unit
  uint public seconsUnit = 1 seconds;
  uint public minutesUnit = 1 minutes;
  uint public hoursUnit = 1 hours;
  uint public daysUnit = 1 days;
  uint public weeksUnit = 1 weeks;

  // Block data
  uint public blockNumber = block.number;
  uint public baseFee = block.basefee;
  bytes32 public blockHash = blockhash(blockNumber);
  bytes32 public oldBlockHash = blockhash(blockNumber - 257);
  uint public chainId = block.chainid;
  address public addressCoinbase = block.coinbase;
  uint public blockDifficulty = block.prevrandao;
  uint public gasLimit = block.gaslimit;
  uint public blockTimestamp = block.timestamp;

  // Message data
  bytes public msgData;
  address public msgSender;
  bytes4 public msgSig;
  uint public msgValue;

  function msgTest(uint8 a) public payable {
    msgData = msg.data;
    msgSender = msg.sender;
    msgSig = msg.sig;
    msgValue = msg.value;
  }

  // Transaction data
  uint public gasPrice = tx.gasprice;
  address public origin = tx.origin;
}
