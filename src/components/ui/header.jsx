import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../../assets/avater.png'
// import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState(true)

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
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <img className=' w-10 h-10 rounded-md' src={Logo} alt="" />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Home</Link>
              </li>
              <li>
                <Link to="/marketplace" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Marketplace</Link>
              </li>
              <li>
                <Button variant="contained">
                  连接钱包
                </Button>
              </li>
            </ul>
          </nav>
          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  )
}
