import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers"; // Importing the hardhat-ethers plugin

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20", // specifying the solidity version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // Configuring the networks (blockchain)
    hardhat: {}, // Configuring the hardhat network
  },
};

export default config;
