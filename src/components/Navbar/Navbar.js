import React from 'react';
import './Navbar.css';
import { Link } from "gatsby"
import logoWithText from '../../images/LogoWithText.svg'
import twitter from '../../images/Twitter.svg'
import youtube from '../../images/Youtube.svg'
import github from '../../images/Github.svg'
import chev from '../../images/chev.svg'

export default function Navbar() {
  return (
    <nav className="nav">
        <div className="nav__container">
            <div className="nav__img-container">
                <img className="nav__logo" src={logoWithText}/>
                <img className='nav__menu-dropdown_smallScreen' src={chev}/>
            </div>
            <div className='nav__menu'>
                <Link className='nav__menu-link' to="/about/"  >About Us</Link>
                <Link className='nav__menu-link' to="/pricing/">Pricing</Link>
                <Link className='nav__menu-link' to="/products/">Products</Link> <img className='nav__menu-dropdown_initial' src={chev}/>
            </div>
        </div>
        
        
        <ul className="nav__social-list">
            <li className="nav__social-link"><a href="#"><img className="nav__social-img" src={twitter} /></a></li>
            <li className="nav__social-link"><a href="#"><img className="nav__social-img" src={github} /></a></li>
            <li className="nav__social-link"><a href="#"><img className="nav__social-img" src={youtube} /></a></li>
        </ul>
    </nav>
  )
};

