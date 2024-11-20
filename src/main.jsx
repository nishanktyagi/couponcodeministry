import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Amazon from './components/Amazon';

import Home from './components/Home.jsx';
import Shoes from './components/Shoes.jsx';
import BeautyProducts from './components/Beauty-products.jsx';
import ECommerce from './components/E-commerce.jsx';
import Health from './components/Health.jsx'; 
import Travel from './components/Travel.jsx';
import Flipkart from './components/Flipkart.jsx';
import Myntra from './components/Myntra.jsx';
import Ajio from './components/Ajio.jsx';
import Boat from './components/Boat.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Home/></>
  },
  {
    path: "/app",
    element: <><App/></>
  },
  {
    path:"/amazon",
    element: <><Amazon/></>
  },
  {
    path:"/flipkart",
    element: <><Flipkart/></>
  },
  {
    path:"/myntra",
    element: <><Myntra/></>
  },
  {
    path:"/ajio",
    element: <><Ajio/></>
  },
  {
    path:"/travel",
    element: <><Travel/></>
  },
  {
    path:"/shoes",
    element: <><Shoes/></>
  },
  {
    path:"/beauty",
    element: <><BeautyProducts/></>
  },
  {
    path:"/e-commerce",
    element: <><ECommerce/></>
  },
  {
    path:"/health",
    element: <><Health/></>
  },
  {
    path:"/boat",
    element: <><Boat/></>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
