
import Home from "@/pages/Home";
import Marketplace from "@/pages/Marketplace";
import Og from "@/pages/Og";
import Lottery from "@/pages/Lottery";
import ArbScr from "@/pages/ArbScr";
import Layout from '@/components/ui/Layout';
import NotFount from "@/pages/404";

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            }, {
                path: 'og',
                element: <Og />
            }, {
                path: 'lottery',
                element: <Lottery />
            }, {
                path: 'marketplace',
                element: <Marketplace />
            }, {
                path: 'arbScriptions',
                element: <ArbScr />
            },
            { path: "*", element: <NotFount /> },
        ]
    }
];


export default routes;