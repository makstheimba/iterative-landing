import React from 'react'
import { NavBarWrapper, NavLink, NavLogo, NavDivider, NavProducts, NavIcon, NavSocial, NavProductsIcon, NavIconImg } from './NavBar'
import navLogo from '../../images/nav_logo.svg'
import navIterative from '../../images/nav_iterative.svg'
import navArrow from '../../images/nav_down.svg'
import twitter from '../../images/icn-twitter.svg'
import github from '../../images/icn-github.svg'
import youtube from '../../images/icn-youtube.svg'

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
      <NavProducts>Products <NavProductsIcon src={navArrow}/></NavProducts>
      
      <NavSocial>
        <NavIcon href="#" target="_blank" rel="noreferrer"><NavIconImg src={twitter}/></NavIcon>
        <NavIcon href="#" target="_blank" rel="noreferrer"><NavIconImg src={github}/></NavIcon>
        <NavIcon href="#" target="_blank" rel="noreferrer"><NavIconImg src={youtube}/></NavIcon>
      </NavSocial>
    </NavBarWrapper>
  )
}

export default NavBar;
