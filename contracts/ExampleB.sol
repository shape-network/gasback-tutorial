pragma solidity 0.8.20;

import {IGasback} from "./interfaces/IGasback.sol";
import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract ExampleB is IERC721Receiver {
    IGasback public gasback;

    constructor(address _gasback) {
        gasback = IGasback(_gasback);
    }

    function registerForGasback() public {
        address me = address(this);
        gasback.register(me, me);
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external override returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }
}
