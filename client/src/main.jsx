import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Upload from './components/Upload.jsx';
import SecureUpload from './components/SecureUpload.jsx';
import MainLayout from './layouts/MainLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      
      {
        path: "/upload",
        element: <Upload></Upload>,
      },
      {
        path: "/secure-upload",
        element: <SecureUpload></SecureUpload>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
