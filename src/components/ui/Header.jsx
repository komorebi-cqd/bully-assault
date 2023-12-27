import { Fragment, useState } from "react";
import Button from "@mui/material/IconButton";
import { BiSolidWallet } from "react-icons/bi";
import useMetaMask from "../../hooks/useMetaMask";
import Drawer from "@mui/material/Drawer";
import { PiListBold } from "react-icons/pi";
import NavLeft from "./NavLeft";
import ConnectWalletDia from "./ConnectWalletDia";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accountMenuEl, setAccountMenuEl] = useState(null);
  const menuOpen = Boolean(accountMenuEl);
  const {
    setWalletOpen,
    account,
    setMetamaskInfoDio,
    connectMetaMaskInfo,
    isShowMetamaskInfo,
    disconnect,
  } = useMetaMask();

  const toggleDrawer = (isOpen) => {
    setIsOpen(isOpen);
  };

  const walletClick = (event) => {
    if (account) {
      setAccountMenuEl(event.currentTarget);
    } else {
      setWalletOpen(true);
    }
  };

  const handleCloseAccountMenu = (type) => {
    if (type === "logout") {
      disconnect();
    }
    setAccountMenuEl(null);
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
          onClick={walletClick}
          aria-controls={menuOpen ? "account-menu" : undefined}
          aria-expanded={menuOpen ? "true" : undefined}
          aria-haspopup="true"
          sx={{
            borderRadius: "40px",
            padding: "4px 12px",
            bgcolor: "rgba(22,29,38,1)",
            border: "1px solid rgba(128,129,149,0.3)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.08)",
            },
          }}
          variant="text"
        >
          <BiSolidWallet className="text-white text-lg" />
          <span className="pl-3 text-base text-white">
            {!account
              ? "Wallet connect"
              : account.slice(0, 4) + "..." + account.slice(-4)}
          </span>
        </Button>
        <Menu
          elevation={0}
          anchorEl={accountMenuEl}
          id="account-menu"
          open={menuOpen}
          onClose={handleCloseAccountMenu}
          onClick={handleCloseAccountMenu}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          slotProps={{
            paper: {
              sx: {
                mt: 1.5,
                minWidth: "320px",
                bgcolor: "rgba(22,29,38,1)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "8px",
                "& .MuiList-root": {
                  padding: "0px",
                },
              },
            },
          }}
        >
          <div className=" text-white font-bold p-4">账户</div>
          <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.12)" }} />
          <MenuItem onClick={handleCloseAccountMenu}>
            <div className=" py-2">
              <span className=" text-white">
                {account.slice(0, 4) + "..." + account.slice(-4)}
              </span>
            </div>
          </MenuItem>
          <Divider
            className="!m-0"
            sx={{ bgcolor: "rgba(255, 255, 255, 0.12)" }}
          />
          <MenuItem onClick={() => handleCloseAccountMenu("logout")}>
            <span className=" text-red-400 text-sm">退出登录</span>
          </MenuItem>
        </Menu>
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
        <div className=" px-6 bg-[rgb(50,50,50)] rounded-3xl py-2 text-sm text-white shadow-[0_3px_5px_-1px_rgba(0,0,0,0.2),0_6px_10px_0px_rgba(0,0,0,0.14),0_1px_18px_0px_rgba(0,0,0,0.12)]">
          {connectMetaMaskInfo}
        </div>
      </Snackbar>
    </div>
  );
};

export default Header;
