import { create } from "zustand";
import { Web3 } from "web3";
const useMetaMask = create((set, get) => ({
    account: "", //钱包地址
    chainId: "", //链ID
    ethereum: window.ethereum,
    connectMetaMask: async () => {
        if (window.web3) {
            const ethereum = get().ethereum;
            const web3 = new Web3(ethereum);
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            })
            const chainId = await ethereum.request({
                method: 'eth_chainId'
            });
            set({account: accounts[0], chainId})
            console.log(web3,accounts,chainId);
        } else {
            console.log("没安装小狐狸");
        }
    }
}));



export default useMetaMask;