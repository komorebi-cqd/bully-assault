
import Home from "@/pages/Home";
import Marketplace from "@/pages/Marketplace";
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
                path: 'marketplace',
                element: <Marketplace />
            },
            { path: "*", element: <NotFount /> },
        ]
    }
];


export default routes;