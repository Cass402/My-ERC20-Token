/** This is a deployment script for the MyToken smart contract onto the local
 * hardhat blockchain. It is written in TypeScript.
 */

// Importing the necessary libraries
import { ethers } from "hardhat"; // Importing the ethers library from hardhat

// defining the main async function
async function main() {
  const [deployer] = await ethers.getSigners(); // Getting the deployer's account

  console.log("Deploying contracts with the account:", deployer.address); // Logging the deployer's address to the console

  const MyToken = await ethers.getContractFactory("MyToken"); // Getting the MyToken contract factory
  const token = await MyToken.deploy(ethers.utils.parseEther("1000000")); // Deploying the MyToken contract with an initial supply of 1,000,000 tokens

  console.log("Token deployed to:", token.address); // Logging the token's address to the console
}

// Running the main function
main()
  .then(() => process.exit(0)) // Exiting the process with a status code of 0
  .catch((error) => {
    // Catching any errors
    console.error(error); // Logging the error to the console
    process.exit(1); // Exiting the process with a status code of 1
  });
