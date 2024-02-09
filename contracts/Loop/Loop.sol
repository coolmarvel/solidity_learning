// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Loop {
  function sumFor() public view returns (uint) {
    uint sum;
    for (uint i = 1; i <= 10; i++) {
      console.log("i :", i);
      sum += i;
    }

    return sum;
  }

  function sumWhile() public view returns (uint) {
    uint sum;
    uint i = 1;
    while (i <= 10) {
      sum += i;
      i++;
    }

    return sum;
  }

  function sumDoWhile() public view returns (uint) {
    uint sum;
    uint i = 1;
    do {
      sum += i;
      i++;
    } while (i <= 10);

    return sum;
  }

  function sumForEvenNumber() public view returns (uint) {
    uint sum;
    for (uint i = 1; i <= 10; i++) {
      if (i % 2 == 1) {
        continue;
      }
      console.log("i :", i);
      sum += i;
    }

    return sum;
  }

  function sumForBreak() public view returns (uint) {
    uint sum;
    for (uint i = 1; i <= 10; i++) {
      console.log("i :", i);
      sum += i;
      if (sum > 30) {
        break;
      }
    }

    return sum;
  }

  function sumForUnchecked() public view returns (uint) {
    uint sum;
    for (uint i = 1; i <= 10; ) {
      sum += i;
      unchecked {
        i++;
      }
    }

    return sum;
  }

  function forExample() public view {
    string[5] memory str = ["BUSD", "ETH", "KDAI", "USDC", "USDT"];
    for (uint i = 0; i < str.length; i++) {
      console.log(str[i]);
    }
  }
}
