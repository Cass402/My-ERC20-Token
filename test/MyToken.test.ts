/** This is a test file that is used to test the deployment and working of the
 * MyToken smart contract. The MyToken contract is deployed onto the local hardhat
 * blockchain. It creates a new token with an initial supply of 1,000,000 tokens.
 */

// Importing the necessary libraries
import { ethers } from "hardhat"; // Importing the ethers library from hardhat
import { expect } from "chai"; // Importing the chai library for assertions

// Defining the test suite
describe("MyToken", function () {
  // Defining the test case
  // This test case checks if the contract is deployed with the correct name and symbol
  it("Should deploy with the correct name and symbol", async function () {
    // Deploying the MyToken contract
    const [owner] = await ethers.getSigners(); // Getting the owner's account
    const MyToken = await ethers.getContractFactory("MyToken"); // Getting the MyToken contract factory
    const token = await MyToken.deploy(ethers.utils.parseEther("1000000")); // Deploying the MyToken contract with an initial supply of 1,000,000 tokens
    await token.deployed(); // Waiting for the token to be deployed

    // Checking the name and symbol of the token
    expect(await token.name()).to.equal("MyToken"); // Checking if the name of the token
    expect(await token.symbol()).to.equal("MTK"); // Checking if the symbol of the token
  });

  // This test case checks if the contract is deployed with the correct initial supply
  it("Should deploy with the correct initial supply", async function () {
    // Deploying the MyToken contract
    const [owner] = await ethers.getSigners(); // Getting the owner's account
    const MyToken = await ethers.getContractFactory("MyToken"); // Getting the MyToken contract factory
    const token = await MyToken.deploy(ethers.utils.parseEther("1000000")); // Deploying the MyToken contract with an initial supply of 1,000,000 tokens
    await token.deployed(); // Waiting for the token to be deployed

    // Checking the initial supply of the token
    expect(await token.totalSupply()).to.equal(
      ethers.utils.parseEther("1000000")
    ); // Checking if the initial supply of the token
    expect(await token.balanceOf(owner.address)).to.equal(
      ethers.utils.parseEther("1000000")
    ); // Checking if the owner's balance is equal to the initial supply
  });

  // This test case checks if the owner is able to mint new tokens
  it("Should allow the owner to mint new tokens", async function () {
    // Deploying the MyToken contract
    const [owner, addr] = await ethers.getSigners(); // Getting the owner's account
    const MyToken = await ethers.getContractFactory("MyToken"); // Getting the MyToken contract factory
    const token = await MyToken.deploy(ethers.utils.parseEther("1000000")); // Deploying the MyToken contract with an initial supply of 1,000,000 tokens
    await token.deployed(); // Waiting for the token to be deployed

    // Minting new tokens
    await token.mint(addr.address, ethers.utils.parseEther("100")); // Minting 100 tokens to the addr account
    // Checking the balance of the addr account
    expect(await token.balanceOf(addr.address)).to.equal(
      ethers.utils.parseEther("100")
    ); // Checking if the balance of the addr account is equal to 100 tokens
  });

  // This test case checks if the owner is able to burn tokens
  it("Should allow the owner to burn tokens", async function () {
    // Deploying the MyToken contract
    const [owner] = await ethers.getSigners(); // Getting the owner's account
    const MyToken = await ethers.getContractFactory("MyToken"); // Getting the MyToken contract factory
    const token = await MyToken.deploy(ethers.utils.parseEther("1000000")); // Deploying the MyToken contract with an initial supply of 1,000,000 tokens
    await token.deployed(); // Waiting for the token to be deployed

    // Burning tokens
    await token.burn(ethers.utils.parseEther("100")); // Burning 100 tokens from the owner's account
    // Checking the balance of the owner's account
    expect(await token.balanceOf(owner.address)).to.equal(
      ethers.utils.parseEther("999900")
    ); // Checking if the balance of the owner's account is equal to 999,900 tokens
  });
});
