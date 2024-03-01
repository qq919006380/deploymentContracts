import { HardhatUserConfig } from "hardhat/config";
const { vars } = require("hardhat/config");
const key = vars.get("key");
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.7.0",
  defaultNetwork: "opBnbTestnet",

  networks: {
    opBnbTestnet: {
      url: "https://opbnb-testnet-rpc.bnbchain.org", // BSC 测试网的 RPC URL
      accounts: [key] // 把 YOUR_PRIVATE_KEY 替换成你的钱包私钥
    },
    
  }
  
};

export default config;
