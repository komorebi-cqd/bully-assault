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
      set({ isConnecting: true });
      try {
        window.ethereum.enable();
        web3.eth.getAccounts().then(function (accounts) {
          set({ account: accounts[0] });
          console.log(accounts);
        });
        web3.eth.getChainId().then(function (chainId) {
          console.log(chainId, "chainId-------");
          set({ chainId: chainId });
        });
        set({
          walletOpen: false,
          isConnecting: false,
        });
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
      //   const ethereum = window.ethereum;
      const web3 = new Web3(window.web3.currentProvider);
      set({ web3 });
      web3.provider.on("connect", () => {
        const connectMetaMask = get().connectMetaMask;
        connectMetaMask();
      });
      web3.provider.on("accountsChanged", async (accounts) => {
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
      web3.provider.on("chainChanged", (event) => {
        console.log("chainChanged", event);
        // dispatch("getClaimNumber")
      });
      web3.provider.on("disconnect", (e) => {
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
