// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Function1 {
    uint public stateValue = 30;

    function function1() public pure {
        uint localValue = 30;
        console.log("function1 call", localValue);
    }

    function functionParam(uint a) public pure {
        console.log("a: ", a);
    }

    function publicFunction() public {
        internalFunction();
        this.externalFunction(); // pure 접근 제어자를 붙이면 externalFunction call 불가능
        _privateFunction();
    }

    function internalFunction() internal pure {
        console.log("internal call");
    }

    function externalFunction() external pure {
        console.log("external call");
    }

    function _privateFunction() private pure {
        console.log("private call");
    }
}
