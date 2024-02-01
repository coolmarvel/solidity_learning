// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Operation {
    // Single Operation
    uint a = 1;
    uint public suffix = a++;
    // suffix = 1
    // a = 2
    uint public prefix = ++a;
    bool public not = !true;

    // Arithmetic
    uint public d = 2 ** 2; // 4
    uint public e = 2 + 2; // 4
    uint public f = 2 - 2; // 0
    uint public g = 2 / 2; // 1
    uint public h = 2 * 2; // 4
    uint public i = 3 % 2; // 1

    // Bit
    bytes1 public byteA = 0x01; // 0000 0001
    bytes1 public byteB = 0x03; // 0000 0011
    bytes1 public a1 = byteA << 2; // 0001 -> 0100
    bytes1 public a2 = byteA >> 1; // 0001 -> 0000
    bytes1 public a3 = byteA & byteB; // 0001 & 0011 -> 0001
    bytes1 public a4 = byteA | byteB; // 0001 | 0011 -> 0011
    bytes1 public a5 = byteA ^ byteB; // 0001 ^ 0011 -> 0010
    bytes1 public a6 = ~byteA; // ~0000 0001 -> 1111 1110

    // Compare
    bool public c = 3 > 4; // false
    bool public c1 = 3 < 4; // true
    bool public c2 = 3 >= 4; // false
    bool public c3 = 4 <= 3; // true
    bool public c4 = 3 == 4; // false
    bool public c5 = 3 != 4; // true

    // three(삼항 연산자)
    bool conditionA = true;
    bool conditionB = false;
    uint public d1 = conditionA == conditionB ? 32 : 64;
    uint public d2 = conditionA == !conditionB ? 32 : 64;

    // change(할당 연산자)
    uint8 public z = 12;
    uint16 public x = 256; // 0000 0001 0000 0000

    function change() public {
        z = uint8(x);
    }
}
