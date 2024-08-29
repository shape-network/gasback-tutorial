pragma solidity 0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IGasback} from "./interfaces/IGasback.sol";

contract ExampleA is Ownable {
    IGasback public gasback;

    constructor(address _gasback) Ownable(msg.sender) {
        gasback = IGasback(_gasback);
    }

    function registerForGasback() public onlyOwner {
        gasback.register(owner(), address(this));
    }
}
