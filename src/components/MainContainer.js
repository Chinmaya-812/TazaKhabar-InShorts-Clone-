import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  return (
    <>
        <Sidebar/>
        <Outlet />
    </>
  )
}

export default MainContainer