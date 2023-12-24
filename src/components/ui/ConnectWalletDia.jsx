import Dialog from '@mui/material/Dialog';
import Metamaskicon from '@/assets/metamask.png'
import useMetaMask from '@/hooks/useMetaMask';
import { IoClose } from "react-icons/io5";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';


const ConnectWalletDia = () => {
    const { walletOpen, setWalletOpen,isConnecting,connectMetaMask } = useMetaMask();
    return (
        <Dialog onClose={() => setWalletOpen(false)} open={walletOpen} PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
            },
          }} sx={{
        }}>
            <div className='pt-6 relative px-4 text-white pb-14 md:w-[400px] bg-mainBgC  box-border'>
                <h3 className='mb-6 text-2xl font-semibold text-center'>连接钱包</h3>
                {/* <div onClick={() => connectToStarknet()} className='flex items-center justify-center gap-x-3 h-20 cursor-pointer my-10 rounded-xl px-3 w-full shadow-[0px_3px_16px_rgba(47,83,109,0.12)]'>
                    <img className='flex-shrink-0 w-16 h-16 rounded-3xl' src={avater} alt="" />
                    <div className='flex-1'>Argent</div>
                </div> */}
                <div className='absolute top-5 right-5'>
                    <IconButton onClick={() => setWalletOpen(false)} sx={{
                        "&:hover": {
                            bgcolor: "rgba(255,255,255,0.08)"
                        }
                    }} size="small">
                        <IoClose className='text-white' />
                    </IconButton>
                </div>
                <div className=''>
                    <Button variant="contained" onClick={() => connectMetaMask()} sx={{
                        width: "100%",
                        borderRadius: "14px",
                        bgcolor: "rgba(255,255,255,0.1)",
                        minHeight: "84px",
                        padding: "0 16px",
                        "&:hover": {
                            bgcolor: "rgba(255,255,255,0.08)"
                        }
                    }}>
                        <div className='relative w-16 h-16 '>
                            {isConnecting && <CircularProgress thickness={2} size={64} sx={{
                                color: "#0CAF60"
                            }} />}

                            <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full'>
                                <img className='flex-shrink-0 object-contain w-10 h-full' src={Metamaskicon} alt="" />
                            </div>
                        </div>
                        <div className='flex-1 w-full ml-2 text-left normal-case sm:ml-5'>
                            <h3 className='text-2xl'>MetaMask</h3>
                            <span>使用 MetaMask 钱包进行连接</span>
                        </div>
                    </Button>
                </div>
            </div>
        </Dialog>
    )
}


export default ConnectWalletDia
