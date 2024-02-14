import { HardhatUserConfig } from "hardhat/config";

import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
    ],
    overrides: {},
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://klaytn.blockpi.network/v1/rpc/public",
      },
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        accountsBalance: "10000000000000000000000000", // 10,000,000 KLAY
      },
      blockGasLimit: 30000000,
    },
    baobab: {
      url: "https://api.baobab.klaytn.net:8651",
      chainId: 1001,
      accounts: require("./baobab.json").privateKey,
      gas: 20000000,
      gasPrice: 250000000000,
    },
    // cypress: {
    //   url: "https://public-node-api.klaytnapi.com/v1/cypress",
    //   chainId: 8217,
    //   accounts: require("./cypress.json").privateKey,
    //   gas: 20000000,
    //   gasPrice: 250000000000,
    // },
  },
};

export default config;
