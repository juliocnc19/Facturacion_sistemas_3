import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Panel from './pages/Panel.tsx';
import Login from './pages/Login.tsx';

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Panel/>,
  },
  {
    path:"/",
    element:<Login/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
