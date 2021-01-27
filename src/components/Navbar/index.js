import React from 'react'
import { NavBarWrapper, NavLink, NavLogo, NavLogoWrap, NavDivider, NavProducts, NavProductsMobile, NavSocial, NavProductsIcon } from './NavBar'
import LinkIcon from '../GlobalStyles/LinkIcon'
import NavDropDown from '../NavDropDown'

import navLogo from '../../images/nav_logo.svg'
import navIterative from '../../images/nav_iterative.svg'
import navArrow from '../../images/nav_down.svg'
import twitter from '../../images/icn-twitter.svg'
import github from '../../images/icn-github.svg'
import youtube from '../../images/icn-youtube.svg'


const NavBar = () => {
  const MOBILE_WIDTH = 720;

  const [width, setWidth] = React.useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

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
          <NavLogoWrap to="/">
            <NavLogo src={navLogo} logo />
            <NavLogo src={navIterative} />
          </NavLogoWrap>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavDivider />
          <NavProducts onClick={handleMenuClick}>
            Products 
            <NavProductsIcon isOpen={isMenuOpen} src={navArrow} />
            <NavDropDown isOpen={isMenuOpen}/>
          </NavProducts>
          <NavSocial>
            <LinkIcon nav href="#" src={twitter} />
            <LinkIcon nav href="#" src={github} />
            <LinkIcon nav href="#" src={youtube} />
          </NavSocial>
        </>}

      {width < MOBILE_WIDTH &&
        <>
          <NavLogoWrap to="/" mobile>
            <NavLogo src={navLogo} logo />
          </NavLogoWrap>
          <NavProductsMobile onClick={handleMenuClick}>
            <NavLogo src={navIterative} mobile />
            <NavProductsIcon isOpen={isMenuOpen} src={navArrow} />
            <NavDropDown isOpen={isMenuOpen}/>
          </NavProductsMobile>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/pricing" mobile>Pricing</NavLink>
        </>}
    </NavBarWrapper>
  )
}

export default NavBar;
