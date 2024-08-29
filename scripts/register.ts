import { task } from "hardhat/config";
import { gasbackAddress } from "./utils/addresses";

task("registerA", "Registers the ExampleA contract for gasback")
    .addPositionalParam("contractAddress", "The address of the ExampleA contract to register")
    .setAction(async (taskArgs, hre) => {
        const { contractAddress } = taskArgs;

        const contract = await hre.ethers.getContractAt("ExampleA", contractAddress);

        const tx = await contract.registerForGasback();
        await tx.wait(1);

        console.log("ExampleA registered! Tx hash: ", tx.hash);
    });

task("registerB", "Registers the ExampleB contract for gasback")
    .addPositionalParam("contractAddress", "The address of the ExampleB contract to register")
    .setAction(async (taskArgs, hre) => {
        const { contractAddress } = taskArgs;

        const contract = await hre.ethers.getContractAt("ExampleB", contractAddress);

        const tx = await contract.registerForGasback();
        await tx.wait(1);

        console.log("ExampleB registered! Tx hash: ", tx.hash);
    });

task("registerC", "Registers the ExampleC contract for gasback")
    .addPositionalParam("contractAddress", "The address of the ExampleC contract to register")
    .setAction(async (taskArgs, hre) => {
        const { contractAddress } = taskArgs;

        const [address] = await hre.ethers.getSigners();

        const gasback = await hre.ethers.getContractAt("Gasback", gasbackAddress);

        const tx = await gasback.register(address, contractAddress);
        await tx.wait(1);

        console.log("ExampleC registered! Tx hash: ", tx.hash);
    });
