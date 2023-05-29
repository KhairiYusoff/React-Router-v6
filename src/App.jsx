import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetailPage from "./pages/ProductDetail";
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
        { index: true, element: <Home /> },//path:''
        { path: 'products', element: <Products /> },
        { path: 'products/:productId', element: <ProductDetailPage /> }
      ],
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
