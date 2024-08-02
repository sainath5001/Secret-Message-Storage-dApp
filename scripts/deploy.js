async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const MessageStorage = await ethers.getContractFactory("MessageStorage");
    const messageStorage = await MessageStorage.deploy("Initial Message", "initialpassword");

    console.log("MessageStorage contract deployed to:", messageStorage.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
