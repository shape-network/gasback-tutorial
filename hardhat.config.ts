import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "dotenv/config";
import "hardhat-watcher";
import { HardhatUserConfig } from "hardhat/config";
import "./scripts/register";
import "./scripts/deploy";

const config: HardhatUserConfig = {
    solidity: {
        version: "0.8.20",
    },
    networks: {
        shapeSepolia: {
            chainId: 11011,
            url: process.env.SHAPE_RPC_URL,
            accounts: {
                mnemonic: process.env.SEED_PHRASE,
            },
        },
    },
};

export default config;
