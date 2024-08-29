import { task } from "hardhat/config";
import { gasbackAddress } from "./utils/addresses";

task("deployA", "Deploys the ExampleA contract").setAction(async (taskArgs, hre) => {
    console.log("Deploying contracts...");

    const Contract = await hre.ethers.getContractFactory("ExampleA");
    const contract = await Contract.deploy(gasbackAddress);

    await contract.waitForDeployment();

    console.log("A deployed to:", await contract.getAddress());
});

task("deployB", "Deploys the ExampleB contract").setAction(async (taskArgs, hre) => {
    console.log("Deploying contracts...");

    const Contract = await hre.ethers.getContractFactory("ExampleB");
    const contract = await Contract.deploy(gasbackAddress);

    await contract.waitForDeployment();

    console.log("B deployed to:", await contract.getAddress());
});

task("deployC", "Deploys the ExampleC contract").setAction(async (taskArgs, hre) => {
    console.log("Deploying contracts...");

    const Contract = await hre.ethers.getContractFactory("ExampleC");
    const contract = await Contract.deploy();

    await contract.waitForDeployment();

    console.log("C deployed to:", await contract.getAddress());
});
