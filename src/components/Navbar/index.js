import React from 'react'
import styled from 'styled-components'
import { NavBarWrapper, NavLink, NavLogo, NavDivider, NavSocial } from './NavBar'
import navLogo from '../../images/nav_logo.svg'
import navIterative from '../../images/nav_iterative.svg'

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavLink  to="/">
        <NavLogo src={navLogo} logo="true" />
        <NavLogo src={navIterative}/>
      </NavLink>
      <NavLink to="/">About Us</NavLink>
      <NavLink to="/">Pricing</NavLink>
      <NavDivider />
      <NavLink to="/">Products</NavLink>
      <NavSocial>

      </NavSocial>
    </NavBarWrapper>
  )
}

export default NavBar;
