import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Root from "./pages/Root"
import ErrorPage from "./pages/Error"
import './index.css';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/products', element: <Products /> },
      ]
    },
  ])

  return (
    <RouterProvider router={router} />


  )
}

export default App
