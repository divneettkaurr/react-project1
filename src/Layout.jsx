import React from 'react'
import Navbar from './components/global/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/global/Footer'
import ThemeProvider from './ContextAPI/ThemeContext'

const Layout = () => {
  return (
    <div>
      <ThemeProvider>

        <Navbar/>
        <Outlet/>
        <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default Layout

