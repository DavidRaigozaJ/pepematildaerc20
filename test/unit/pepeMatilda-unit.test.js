const { assert, expect } = require("chai")
const { network, getNamedAccounts, deployments, ethers } = require("hardhat")
const {developmentChains, INITIAL_SUPPLY} = require("../../helper-hardhat-config")


!developmentChains.includes(network.name) ? describe.skip : describe("PepeMatilda unit Test", function () {
    const multiplier = 10 ** 18
    let pepeMatilda, deployer, user1
    beforeEach(async function() {
        const accounts = await getNamedAccounts()
        deployer = accounts.deployer
        user = accounts.user1
        await deployments.fixture("all")
        pepeMatilda = await ethers.getContract("PepeMatilda", deployer)
    })
    describe("deployment", function () {
        it("was deployed", async function(){
            assert(pepeMatilda.address)
        })

        it("should have the correct name, symbol, and decimals", async function () {
            expect(await pepeMatilda.name()).to.equal("PepeMatilda");
            expect(await pepeMatilda.symbol()).to.equal("PM");
            expect(await pepeMatilda.decimals()).to.equal(18);
          })

    
    })

})