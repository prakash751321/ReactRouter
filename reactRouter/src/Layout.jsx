import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />      {/* Outlet is used to change the pages , e.g; it is in 2nd line means the which is the second component that can be changed. */}
        <Footer />
    </>
  )
}

export default Layout