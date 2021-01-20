import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import styled from 'styled-components'

const Layout = ({ children }) => {

  return (
    <>
      {/* <NavBar /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
