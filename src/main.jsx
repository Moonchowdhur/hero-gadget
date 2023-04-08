import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import { customloader } from './components/customloader/customloader';
import Error from './components/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/shop",
        element:<Shop></Shop>,
        loader:()=>fetch("products.json")
      },
      {
        path: "/cart",
        element:<Cart></Cart>,
        loader:customloader,
      },
      {
        path: "/about",
        element:<h2>About page</h2>
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
