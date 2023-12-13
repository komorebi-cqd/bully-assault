import { Outlet,ScrollRestoration  } from 'react-router-dom';

import Header from './header';
import Footer from "./footer";


function Layout() {
    return (
        <div className='relative min-h-screen dark:bg-black'>
            <div className="min-h-screen">
                <div className="mx-auto lg:px-0">
                    <Header />
                    <ScrollRestoration />
                    <main className='max-w-screen-lg m-auto px-5 pt-32'>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Layout;
