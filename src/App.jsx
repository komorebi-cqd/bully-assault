import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './router';

const router = createBrowserRouter(routes)

const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<p>加载中......</p>} />
  )
}

export default App
