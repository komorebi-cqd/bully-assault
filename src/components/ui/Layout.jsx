import { Outlet, ScrollRestoration } from 'react-router-dom';

import Header from './Header';
import NavLeft from './NavLeft';

function Layout() {
    return (
        <div className='relative flex w-screen min-h-screen overflow-x-hidden bg-minorBgC'>
            {/* 左边导航 */}
            <NavLeft />
            {/* 主要内容 */}
            <div className='relative flex-1 max-h-screen overflow-y-auto'>
                {/* 滑动到顶部的 */}
                <ScrollRestoration />
                <Header />
                <main className='box-border px-5 py-10 mx-auto max-w-96'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
export default Layout;
