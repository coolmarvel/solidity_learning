// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Array {
  string[5] public array1 = ["BUSD", "ETH", "KDAI", "USDC", "USDT"];
  uint[] public array2;

  function getArray1Length() public view returns (uint) {
    return array1.length;
  }

  function getArray2Length() public view returns (uint) {
    return array2.length;
  }

  function pushArray2(uint value) public {
    array2.push(value);
  }

  function popArray2() public {
    array2.pop();
  }

  function setArray2(uint index, uint value) public {
    array2[index] = value;
  }

  function deleteArray2(uint index) public {
    delete array2[index];
  }

  bytes b1 = "Hello";
  bytes b2 = "Hello";
  bytes b3 = bytes.concat(b1, b2);

  string public s1 = "Hello";
  string public s2 = "Hello";

  function getBytes() public view returns (bytes memory, bytes memory, bytes memory) {
    bytes memory _b1 = b1;
    bytes memory _b2 = b2;
    bytes memory _b3 = b3;

    return (_b1, _b2, _b3);
  }

  function equalString(string memory _s1, string memory _s2) public pure returns (bool result) {
    string memory str1 = _s1;
    string memory str2 = _s2;

    result = keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
  }

  bool public equalResult = equalString(s1, s2);
}
