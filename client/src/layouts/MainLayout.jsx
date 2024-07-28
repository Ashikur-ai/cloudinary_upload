import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <h1>Upload file using cloudinary service in MERN stack project</h1>
      <Link to={"/"}>Home</Link> |<Link to={"/upload"}>Upload</Link> |
      <Link to={"/secure-upload"}>Secure Upload</Link>
      <Outlet></Outlet>
    </>
  );
}

export default MainLayout
