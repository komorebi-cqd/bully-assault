import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './router';
import useMetaMask from "@/hooks/useMetaMask";
import { useEffect } from 'react';
const router = createBrowserRouter(routes)

const App = () => {
  const { subscribeChain } = useMetaMask();
  useEffect(() => {
    subscribeChain();
  }, [subscribeChain])
  return (
    <RouterProvider router={router} fallbackElement={<p>加载中......</p>} />
  )
}

export default App
