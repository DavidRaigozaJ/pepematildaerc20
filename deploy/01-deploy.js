const { network } = require("hardhat")
const{
    developmentChains,
    INITIAL_SUPPLY,
} = require("../helper-hardhat-config")
const { verify } = require("../helper-functions")

module.exports = async ({ getNamedAccounts, deployments}) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const pepeMatilda = await deploy("PepeMatilda", {
        from: deployer,
        args: [INITIAL_SUPPLY],
        log: true,

        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log(`pepeMatilda deployed at ${pepeMatilda.address}`)

    if(
        !developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY
    ) {
        await verify(pepeMatilda.address, [INITIAL_SUPPLY])
    }
}

module.exports.tags = ["all", "token"]

