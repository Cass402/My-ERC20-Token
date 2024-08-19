import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers"; // Importing the ethers library from hardhat

const config: HardhatUserConfig = {
  solidity: "0.8.0", // Specifying the Solidity version
  networks: {
    // Configuring the networks (blockchain)
    hardhat: {}, // Configuring the hardhat network
  },
};

export default config;
