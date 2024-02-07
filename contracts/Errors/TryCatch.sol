// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Math {
  function division(uint _num1, uint _num2) public pure returns (uint) {
    require(_num1 < 10, "num1 should not be more than 10");

    return _num1 / _num2;
  }
}

contract Runner {
  event catchError(string _name, string _error);
  event catchPanic(string _name, uint _error);
  event catchLowLevelError(string _name, bytes _error);

  Math public mathInstance = new Math();

  function executeTryCatch(uint _num1, uint _num2) public returns (uint, bool) {
    try mathInstance.division(_num1, _num2) returns (uint value) {
      return (value, true);
    } catch Error(string memory _error) {
      console.log("revert/require error");

      emit catchError("revert/require", _error);

      return (0, false);
    } catch Panic(uint _errorCode) {
      console.log("panic error");

      emit catchPanic("assertError/Panic", _errorCode);

      return (0, false);
    } catch (bytes memory _errorCode) {
      emit catchLowLevelError("LowLevelError", _errorCode);

      return (0, false);
    }
  }
}

contract Charactor {
  constructor() {
    revert("error");
  }
}

contract Runner2 {
  function executeTryCatch() public returns (bool successOrFail) {
    try new Charactor() {
      return (true);
    } catch {
      console.log("catch error");

      return (false);
    }
  }
}

contract Runner3 {
  function simple() public pure returns (uint) {
    revert("error");

    return 4;
  }

  function executeTryCatch() public returns (uint, bool) {
    try this.simple() returns (uint _value) {
      return (_value, true);
    } catch {
      console.log("catch error");

      return (0, false);
    }
  }
}
