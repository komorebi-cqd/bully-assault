import { connect, disconnect } from 'starknetkit';
import { InjectedConnector } from "starknetkit/injected"
import { create } from "zustand";


const useWallet = create((set) => ({
    walletDiaIsOpen: false,  //控制钱包的弹框
    onCloseWalletDia: () => set({ walletDiaIsOpen: false }), //关闭钱包dia
    onOpenCloseWalletDia: () => set({ walletDiaIsOpen: true }), //打开钱包dia
    isConnected: false, //是否连接
    account: "", //连接账号
    selectedAddress: "",
    provider: null,
    connection: null,
    connectToStarknet: async (mode = "alwaysAsk") => {
        const res = await connect({
            modalMode: mode,
            dappName: "BullyAssault",
            connectors: [
                new InjectedConnector({
                    options: { id: "argentX" }
                }),
                new InjectedConnector({
                    options: { id: "braavos" }
                })
            ]
        });
        console.log(res);
        set({
            connection: res,
            isConnected: res?.isConnected || false,
            account: res?.account,
            selectedAddress: res?.selectedAddress || '',
            provider: res.provider
        })
    },
    disconnecting: async () => {
        await disconnect();
        set({
            connection: null,
            provider: null,
            isConnected: false,
            account: "",
            selectedAddress: "",
        })
    }

}));


export default useWallet;



