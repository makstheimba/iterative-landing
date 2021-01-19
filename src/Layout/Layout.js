import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'

const Layout = ({ children }) => {

  return (
    <>
      {/* <NavBar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
