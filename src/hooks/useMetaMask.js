import { create } from "zustand";
import { Web3 } from "web3";
const useMetaMask = create((set, get) => ({
    walletOpen: false,
    account: "", //钱包地址
    chainId: "", //链ID
    ethereum: window.ethereum,
    isConnecting: false, //是否正在连接中
    connectMetaMask: async () => {
        if (window.web3) {
            set({ isConnecting: true });
            const ethereum = get().ethereum;
            const web3 = new Web3(ethereum);
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            })
            const chainId = await ethereum.request({
                method: 'eth_chainId'
            });
            set({ account: accounts[0], chainId, walletOpen: false, isConnecting: false })
            console.log(web3, accounts, chainId);
        } else {
            window.open("https://metamask.io/download/", "_blank");
        }
    },
    setWalletOpen: (isOpen) => {
        set({ walletOpen: isOpen, isConnecting: false })
    }
}));



export default useMetaMask;