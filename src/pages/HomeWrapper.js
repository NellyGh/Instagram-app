import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

function HomeWrapper() {
  return (
    <div>
    <Navbar />
    <Outlet />
    </div>
  )
}

export default HomeWrapper