import React from 'react';
import PropTypes from 'prop-types';
import './BottomLine.css';
import logoWithText from '../../images/LogoWithText.svg'
import linkedin from '../../images/linkedInLogo.svg'
import twitter from '../../images/Twitter.svg'
import discord from '../../images/Discord.svg'
import youtube from '../../images/Youtube.svg'
import github from '../../images/Github.svg'

export default function BottomLine({  children }) {
  return <div className="bottomLine">
    <img src={logoWithText} />
    <p className="bottomLine__text">Open platform to operationalize AI</p>
    <ul>
    <li className="bottomLine__social"><img src={github} /></li>
    <li className="bottomLine__social"><img src={twitter} /></li>
    <li className="bottomLine__social"><img src={linkedin} /></li>
    <li className="bottomLine__social"><img src={youtube} /></li>
    <li className="bottomLine__social"><img src={discord} /></li>
    </ul>
  </div>
};
