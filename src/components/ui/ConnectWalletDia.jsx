import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import avater from '@/assets/avater.png'
// import useWallet from '@/hooks/useWallet';


const ConnectWalletDia = (props) => {
//   const { connectToStarknet } = useWallet();

    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <div className='px-6 pt-6 pb-14 w-96'>
                <div>
                    <div className='my-6 text-3xl'>Connect Wallet</div>
                    <div>Choose a wallet you want to connect. Thereare several wallet providers.</div>
                </div>
                {/* <div onClick={() => connectToStarknet()} className='flex items-center justify-center gap-x-3 h-20 cursor-pointer my-10 rounded-xl px-3 w-full shadow-[0px_3px_16px_rgba(47,83,109,0.12)]'>
                    <img className='flex-shrink-0 w-16 h-16 rounded-3xl' src={avater} alt="" />
                    <div className='flex-1'>Argent</div>
                </div> */}
                <div className='flex items-center justify-center gap-x-3 h-20 cursor-pointer rounded-xl px-3 w-full shadow-[0px_3px_16px_rgba(47,83,109,0.12)]'>
                    <img className='flex-shrink-0 w-16 h-16 rounded-3xl' src={avater} alt="" />
                    <div className='flex-1'>Argent</div>
                </div>
            </div>
        </Dialog>
    )
}

ConnectWalletDia.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default ConnectWalletDia
