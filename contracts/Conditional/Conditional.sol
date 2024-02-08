// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Conditional {
  uint public score;
  bool public pass = false;

  string public grade;

  function setScore(uint _score) public {
    score = _score;
  }

  function setPass1() public {
    if (score > 60) pass = true;
  }

  function setPass2() public {
    if (score > 60) pass = true;
    else pass = false;
  }

  function setPass3() public {
    pass = score > 60 ? true : false;
  }

  function setGrade1() public {
    if (score > 90) grade = "A";
    else if (score > 80) grade = "B";
    else if (score > 70) grade = "C";
    else if (score > 60) grade = "D";
    else grade = "F";
  }

  function setGrade2() public {
    if (score > 90) {
      grade = "A";
      pass = true;
    } else if (score > 80) {
      grade = "B";
      pass = true;
    } else if (score > 70) {
      grade = "C";
      pass = false;
    } else if (score > 60) {
      grade = "D";
      pass = false;
    } else {
      grade = "F";
      pass = false;
    }
  }
}
