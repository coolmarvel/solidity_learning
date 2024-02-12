pragma solidity ^0.8.0;

interface IVehicle {
    function carYearCheck() external returns(uint);
}
contract Cayenne is IVehicle {
    function carYearCheck() public override returns(uint) {
        return 21;
    }
}
