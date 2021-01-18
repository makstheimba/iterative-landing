import React from 'react'
import { NavBarWrapper, NavLink, NavLogo, NavDivider, NavIcon, NavSocial } from './NavBar'
import navLogo from '../../images/nav_logo.svg'
import navIterative from '../../images/nav_iterative.svg'
import navArrow from '../../images/nav_down.svg'

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
      <NavLink to="/" isMenu="true">Products <NavIcon src={navArrow}/></NavLink>
      
      <NavSocial>
        <NavIcon src={navArrow}/>
        <NavIcon src={navArrow}/>
        <NavIcon src={navArrow}/>
      </NavSocial>
    </NavBarWrapper>
  )
}

export default NavBar;
