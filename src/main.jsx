import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.scss'
import App from './App.jsx'
import Login from './views/Login/Login.jsx'
import Home from './views/Home/Home.jsx'
import Product from './views/Product/Product.jsx'
import Pay from './views/Pay/Pay.jsx'
import Products_Mock from './mocks/products.mock.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home data={Products_Mock}/>,
  },
  {
    path: "/product/:productId",
    element: <Product data={Products_Mock}/>
  },
  {
    path: "/pay/:PaymentId",
    element: <Pay data={Products_Mock}/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
