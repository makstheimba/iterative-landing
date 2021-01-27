import React from 'react';
import PropTypes from 'prop-types';
import './BottomLine.css';
import logoWithText from '../../images/LogoWithText.svg'
import linkedin from '../../images/linkedInLogo.svg'
import twitter from '../../images/Twitter.svg'
import discord from '../../images/Discord.svg'
import youtube from '../../images/Youtube.svg'
import github from '../../images/Github.svg'

export default function BottomLine() {
  return <div className="bottomLine">
    <div className="bottomLine__logo">
      <img src={logoWithText} />
      <p className="bottomLine__text">Open platform to operationalize AI</p>
    </div>
    <ul className="bottomLine__list">
      <li className="bottomLine__social"><a href="#"><img src={github} /></a></li>
      <li className="bottomLine__social"><a href="#"><img src={twitter} /></a></li>
      <li className="bottomLine__social"><a href="#"><img src={linkedin} /></a></li>
      <li className="bottomLine__social"><a href="#"><img src={youtube} /></a></li>
      <li className="bottomLine__social"><a href="#"><img src={discord} /></a></li>
    </ul>
  </div>
};
