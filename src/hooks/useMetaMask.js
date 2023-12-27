import { create } from "zustand";
import { Web3 } from "web3";
const useMetaMask = create((set, get) => ({
  connectMetaMaskInfo: "", //小狐狸提示信息
  isShowMetamaskInfo: false, //是否显示小狐狸错误信息
  walletOpen: false, //小狐狸连接弹窗控制
  account: "", //钱包地址
  chainId: "", //链ID
  web3: null,
  isConnecting: false, //是否正在连接中
  connectMetaMask: async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      const web3 = get().web3;
      const ethereum = window.ethereum;
      set({ isConnecting: true });
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        }); //请求地址

        const chainId = await ethereum.request({
          method: "eth_chainId",
        }); // 请求链
        console.log(chainId, "eth_chainId", accounts[0], web3);
        // const res =await web3.eth.getBalance(accounts[0]);
        // console.log(res, " 代币余额");
        set({
          account: accounts[0],
          chainId,
          walletOpen: false,
          isConnecting: false,
        });
        console.log(web3, accounts, chainId);
      } catch (error) {
        console.log(error, "----------错误");
        const setMetamaskInfoDio = get().setMetamaskInfoDio;
        if (error.code === 4001) {
          setMetamaskInfoDio(true, "用户已取消连接");
        } else {
          setMetamaskInfoDio(true, "连接错误");
        }
        console.log(error);
      }
    } else {
      window.open("https://metamask.io/download/", "_blank");
    }
  },
  subscribeChain() {
    if (typeof window !== "undefined" && window.ethereum) {
      const ethereum = window.ethereum;
      const web3 = new Web3(ethereum);
      set({ web3 });
      ethereum.on("connect", () => {
        const connectMetaMask = get().connectMetaMask;
        connectMetaMask();
      });
      ethereum.on("accountsChanged", async (accounts) => {
        console.log("change account", accounts);
        if (!accounts[0]) {
          set({ account: "" });
          const setMetamaskInfoDio = get().setMetamaskInfoDio;
          setMetamaskInfoDio(true, "钱包已断开");
          return;
        }
        // const res = await web3.eth.getBalance(accounts[0]);
        // console.log(res, " 代币余额");
        set({ account: accounts[0] }); //地址改变更新
        // dispatch("getClaimNumber")
      });
      ethereum.on("chainIdChanged", (chainID) => {
        console.log("chainIdChanged-" + chainID);
      });
      ethereum.on("chainChanged", (event) => {
        console.log("chainChanged", event);
        // dispatch("getClaimNumber")
      });
      ethereum.on("disconnect", (e) => {
        console.log("------disconnect", e);
        // 清空钱包连接类型
        // commit("accountChange", '')
        // set({ account: "", chainId: "" });
      });
    }
  },
  disconnect: () => {
    set({
      account: "",
      chainId: "",
    });
  },
  setWalletOpen: (isOpen) => {
    set({ walletOpen: isOpen, isConnecting: false });
  },
  setMetamaskInfoDio: (isShow, info) => {
    set({
      isShowMetamaskInfo: isShow,
      connectMetaMaskInfo: info,
      walletOpen: false,
      isConnecting: false,
    });
  },
}));

export default useMetaMask;
