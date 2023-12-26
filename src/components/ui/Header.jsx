import { Fragment, useState } from "react";
import Button from "@mui/material/IconButton";
import { BiSolidWallet } from "react-icons/bi";
import useMetaMask from "../../hooks/useMetaMask";
import Drawer from "@mui/material/Drawer";
import { PiListBold } from "react-icons/pi";
import NavLeft from "./NavLeft";
import ConnectWalletDia from "./ConnectWalletDia";
import Snackbar from "@mui/material/Snackbar";
import Slide from '@mui/material/Slide';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    setWalletOpen,
    account,
    setMetamaskInfoDio,
    connectMetaMaskInfo,
    isShowMetamaskInfo,
  } = useMetaMask();

  const toggleDrawer = (isOpen) => {
    setIsOpen(isOpen);
  };

  const walletClick = () => {
    if (account) {
      console.log("钱包已连接");
    } else {
      setWalletOpen(true);
    }
  };

  return (
    <div className=" sticky top-0 left-0 right-0 px-9 h-[var(--nav-height)] bg-mainBgC flex justify-between sm:justify-end items-center">
      <div className="block sm:hidden">
        <Button
          onClick={() => toggleDrawer(true)}
          sx={{
            bgcolor: "rgba(255,255,255,0.08)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.2)",
            },
          }}
          variant="text"
        >
          <PiListBold className="text-2xl text-white " />
        </Button>
      </div>
      <div>
        <Button
          onClick={() => walletClick()}
          sx={{
            borderRadius: "40px",
            padding: "12px 20px",
            bgcolor: "rgba(22,29,38,1)",
            border: "2px solid rgba(128,129,149,0.3)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.08)",
            },
          }}
          variant="text"
        >
          <BiSolidWallet className="text-white" />
          <span className="pl-3 text-base text-white">
            {!account
              ? "Wallet connect"
              : account.slice(0, 4) + "..." + account.slice(-4)}
          </span>
        </Button>
      </div>
      <ConnectWalletDia />
      <Fragment>
        <Drawer anchor="left" open={isOpen} onClose={() => toggleDrawer(false)}>
          <NavLeft isDrawer={true} setIsOpen={setIsOpen} />
        </Drawer>
      </Fragment>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isShowMetamaskInfo}
        autoHideDuration={3000}
        onClose={() => setMetamaskInfoDio(false, "")}
        key="tip"
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <div className=" px-4 bg-[rgba(50,50,50,1)] rounded py-2 text-sm">
          {connectMetaMaskInfo}
        </div>
      </Snackbar>
    </div>
  );
};

export default Header;
