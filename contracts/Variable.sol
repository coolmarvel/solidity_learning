// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Variable {
    // base
    uint private _defaultValue;
    uint public defaultValue;
    uint constant CONSTANT_VALUE = 12345678;
    uint immutable IMMUTABLE_VALUE;

    constructor() {
        IMMUTABLE_VALUE = 123;
    }

    // boolean
    bool public defaultBooleanValue;
    bool public booleanValue = true;
    bool public booleanNot = !true; // false
    bool public booleanAnd = true && true; // true
    bool public booleanOr = true || true; // true
    bool public booleanEqual = true == true; // true
    bool public booleanNotEqual = true != true; // false

    // address
    address public addressValue = address(1); // 0x0000000000000000000000000000000000000001
    address public defaultAddressValue; // 0x0000000000000000000000000000000000000000

    // byte
    bytes32 public defaultByteValue; // 0x0000000000000000000000000000000000000000000000000000000000000000
    bytes32 public byteValue = "0x12"; // 0x3078313200000000000000000000000000000000000000000000000000000000
}
