const chains = [
  {
    chainId: "1",
    status: "OK",
    chainName: "Ethereum",
    description: "The primary public Ethereum blockchain network.",
    vmName: "EVM",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://proxy-api.avax.network/proxy/infura/mainnet",
    isTestnet: false,
    utilityAddresses: {
      multicall: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
    },
    networkToken: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
      logoUri:
        "https://images.ctfassets.net/gcj8jwzm6086/6l56QLVZmvacuBfjHBTThP/791d743dd2c526692562780c2325fedf/eth-circle__1_.svg",
      description:
        "Ether is used to pay for transaction fees and computational services on Etherum. Users can send Ether to other users, and developers can write smart contracts that receive, hold, and send Ether.",
    },
    chainLogoUri:
      "https://images.ctfassets.net/gcj8jwzm6086/6l56QLVZmvacuBfjHBTThP/791d743dd2c526692562780c2325fedf/eth-circle__1_.svg",
    private: false,
  },
];

export default chains;
