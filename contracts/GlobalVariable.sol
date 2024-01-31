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
}
