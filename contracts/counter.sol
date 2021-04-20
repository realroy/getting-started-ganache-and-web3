// SPDX-License-Identifier: MIT

pragma solidity >=0.7.4;

contract CounterContract {
  int public count = 0;

  function increase() public {
    count++;
  }

  function decrease() public {
    count--;
  }

  function getCount() public view returns (int) {
    return count;
  } 
}