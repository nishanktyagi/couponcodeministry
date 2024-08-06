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
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Home/></>
  },
  {
    path:"/amazon",
    element: <><Amazon/></>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
