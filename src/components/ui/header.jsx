import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../../assets/avater.png'
import { useLocation } from "react-router-dom";
import ConnectWalletDia from './ConnectWalletDia';
// import MobileMenu from './mobile-menu'

export default function Header() {
  const location = useLocation();
  console.log(location);
  const [top, setTop] = useState(true);

  const [openWellet, setOpenWellet] = useState(true);

  const handleConnectWalletDia = () => {
    setOpenWellet(true);
  };

  const cloneConnectWalletDia = () => {
    setOpenWellet(false);
  }

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out backdrop-blur-sm shadow-md ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl px-5 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            <img className='w-10 h-10 rounded-md ' src={Logo} alt="" />
          </div>

          {/* Desktop navigation */}
          <nav className="flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex flex-wrap items-center justify-end grow gap-x-10">
              <li>
                <Link to="/" className={`flex items-center py-3 font-medium text-gray-600 hover:text-gray-900  transition duration-150 ease-in-out  relative after:absolute after:h-[2px] after:transition-all after:bottom-0 hover:after:bg-primary hover:after:left-0 hover:after:right-0 ${location?.pathname === "/" ? "after:left-0 after:right-0 after:bg-primary text-gray-900 " : "after:left-1/2 after:right-1/2"}`}>Home</Link>
              </li>
              <li>
                <Link to="/marketplace" className={`flex items-center py-3 font-medium text-gray-600 hover:text-gray-900  transition duration-150 ease-in-out relative after:absolute after:h-[2px] after:transition-all after:bottom-0 hover:after:bg-primary hover:after:left-0 hover:after:right-0 ${location?.pathname === "/marketplace" ? "after:left-0 after:right-0 after:bg-primary text-gray-900 " : "after:left-1/2 after:right-1/2"}`}>Marketplace</Link>
              </li>
              <li>
                <Button variant="contained" onClick={() => handleConnectWalletDia()}>
                  连接钱包
                </Button>
              </li>
            </ul>
          </nav>
          {/* <MobileMenu /> */}
        </div>
      </div>
      <ConnectWalletDia open={openWellet} onClose={cloneConnectWalletDia}/>
    </header>
  )
}
