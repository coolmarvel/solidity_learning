import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.9" }],
    overrides: {},
  },
  networks: {
    hardhat: {
      forking: { url: "https://rpc.ankr.com/klaytn" },
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        initialIndex: 0,
        accountsBalance: "10000000000000000000000000",
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
  },
};

export default config;
