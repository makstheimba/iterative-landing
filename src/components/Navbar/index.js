import React from 'react'
import { NavBarWrapper, NavLink, NavLogo, NavDivider, NavProducts, NavProductsMobile, NavIcon, NavSocial, NavProductsIcon, NavIconImg } from './NavBar'
import navLogo from '../../images/nav_logo.svg'
import navIterative from '../../images/nav_iterative.svg'
import navArrow from '../../images/nav_down.svg'
import twitter from '../../images/icn-twitter.svg'
import github from '../../images/icn-github.svg'
import youtube from '../../images/icn-youtube.svg'

const NavBar = () => {
  const MOBILE_WIDTH = 768;

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return (

    <NavBarWrapper>
      {(width >= MOBILE_WIDTH) &&
        <>
          <NavLink to="/">
            <NavLogo src={navLogo} logo="true" />
            <NavLogo src={navIterative} />
          </NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavDivider />
          <NavProducts>Products <NavProductsIcon src={navArrow} /></NavProducts>

          <NavSocial>
            <NavIcon href="#" target="_blank" rel="noreferrer"><NavIconImg src={twitter} /></NavIcon>
            <NavIcon href="#" target="_blank" rel="noreferrer"><NavIconImg src={github} /></NavIcon>
            <NavIcon href="#" target="_blank" rel="noreferrer"><NavIconImg src={youtube} /></NavIcon>
          </NavSocial>
        </>}
      {width < MOBILE_WIDTH &&
        <>
          <NavProductsMobile to="/">
            <NavLogo src={navLogo} logo="true" />
            <NavLogo src={navIterative} />
            <NavProductsIcon src={navArrow} />
          </NavProductsMobile>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
        </>}
    </NavBarWrapper>
  )
}

export default NavBar;
