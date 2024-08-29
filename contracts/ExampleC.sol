pragma solidity 0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract ExampleC is Ownable {
    constructor() Ownable(msg.sender) {}
}
