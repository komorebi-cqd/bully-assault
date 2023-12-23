
import { useLocation, useNavigate } from "react-router-dom";

import { LuTwitter } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { RiMastercardLine } from "react-icons/ri";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import LogoImg from "@/assets/logo.png";
import Button from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';



const navList = [
    { navText: "Home", navIcon: <AiOutlineHome className="text-xl text-white " />, pathUrl: "/" },
    { navText: "OG Airdrop", navIcon: <RiMastercardLine className="text-xl text-white " />, pathUrl: "/og" },
    { navText: "Lottery", navIcon: <RiMastercardLine className="text-xl text-white " />, pathUrl: "/lottery" },
    { navText: "Marketplace", navIcon: <MdOutlineStoreMallDirectory className="text-xl text-white " />, pathUrl: "/marketplace" },
];


const StyledListItemButton = styled((props) => <ListItemButton {...props} />)(
    ({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            justifyContent: "center",
        },
    }),
);

const StyledListItemIcon = styled((props) => <ListItemIcon {...props} />)(
    ({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            textAlign: "center",
            width: "auto",
            minWidth: "auto"
        },
    }),
);


const NavLeft = ({ isDrawer = false, setIsOpen }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const ListItemButtonCur = isDrawer ? ListItemButton : StyledListItemButton;
    const ListItemIconCur = isDrawer ? ListItemIcon : StyledListItemIcon;

    const jumpUrl = (url) => {
        navigate(url);
        if(isDrawer){
            setIsOpen(false)
        }
    }
    return (
        <nav className={`flex-col justify-between h-screen max-h-screen text-white transition-all  bg-mainBgC ${isDrawer ? " flex w-60" : "hidden sm:flex sm:w-28 md:w-60"}`}>
            <div onClick={() => jumpUrl("/")} className='h-[var(--nav-height)] border-b-2 cursor-pointer border-[rgba(22,29,38,1)] flex justify-center items-center gap-x-4'>
                <img className="w-10 h-auto " src={LogoImg} />
                <span className={`pt-2 text-xl font-bold ${isDrawer ? "" : "hidden md:block"}`}>ARBS-20</span>
            </div>
            <div className='flex flex-col items-center justify-between flex-1'>
                <div className="w-full px-5 mx-auto mt-6 ">
                    <List
                        sx={{ width: '100%' }}
                        component="nav"
                    >
                        {navList.map(it => (
                            <ListItemButtonCur onClick={() => jumpUrl(it.pathUrl)} key={it.navText} sx={{
                                borderRadius: "10px",
                                bgcolor: location.pathname === it.pathUrl ? "rgba(12, 175, 96, 1);" : "",
                                marginBottom: "8px",
                                "&:hover": {
                                    bgcolor: "rgba(12, 175, 96, 1)"
                                }
                            }}>
                                <ListItemIconCur sx={{
                                    minWidth: "32px",
                                }}>
                                    {it.navIcon}
                                </ListItemIconCur>
                                <span className={`${isDrawer ? "block" : "hidden md:block"}`}>{it.navText}</span>
                                {/* <ListItemText className="hidden sm:block" primary={it.navText} /> */}
                            </ListItemButtonCur>
                        ))}

                    </List>
                </div>
                <div className="w-full px-5 mx-auto pb-14">
                    <div className=" text-sm text-[rgba(194,194,194,1)] pl-4">Look</div>
                    <List
                        sx={{ width: '100%' }}
                        component="nav"
                    >
                        <ListItemButtonCur onClick={() => jumpUrl("/arbScriptions")} sx={{
                            borderRadius: "10px",
                            marginBottom: "8px",
                            "&:hover": {
                                bgcolor: "rgba(12, 175, 96, 1)"
                            }
                        }}>
                            <ListItemIconCur sx={{
                                minWidth: "32px",
                            }}>
                                <RiMastercardLine className="text-xl text-white " />
                            </ListItemIconCur>
                            <span className={`${isDrawer ? "block" : "hidden md:block"}`}>My ArbScriptions</span>
                            {/* <ListItemText className="hidden sm:block" primary={it.navText} /> */}
                        </ListItemButtonCur>

                    </List>
                </div>
            </div>
            <div className='flex items-center justify-end h-16 px-5'>
                <Button sx={{
                    "&:hover": {
                        bgcolor: "rgba(255,255,255,0.08)"
                    }
                }} size="small">
                    <Link href="https://twitter.com/ARBS_20" className='p-1' target="_blank">
                        <LuTwitter className='text-white' />
                    </Link>
                </Button>
            </div>
        </nav>
    )
};

NavLeft.propTypes = {
    isDrawer: PropTypes.bool,
    setIsOpen: PropTypes.func.isRequired
}

export default NavLeft
