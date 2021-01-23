import React from 'react';
import PropTypes from 'prop-types';
import './Community.css';
import twitter from '../../images/Twitter.svg'
import discord from '../../images/Discord.svg'
import github from '../../images/Github.svg'

export default function Community() {
  return <div className="community">
    <div className="community__accent"></div>
    <h2 className="community__title">Meet our community</h2>
    <ul className="community__list">
      <li className="community__stat">
        <p className="community__stat-title">200+</p>
        <p className="community__stat-text">Open Source Contributors</p>
     </li>
     <li className="community__stat">
       <p className="community__stat-title">1000+</p>
       <p className="community__stat-text">Companies</p>
     </li>
     <li className="community__stat">
        <p className="community__stat-title">4000+</p>
        <p className="community__stat-text">Community Members</p>
     </li>
     <li className="community__stat">
        <p className="community__stat-title">9000+</p>
        <p className="community__stat-text">Github Stars</p>
      </li>
    </ul>
    <div className="community__links">
      <p className="community__text">Join the community:</p>
      <img className="community__social" src={discord}/>
      <img className="community__social" src={github}/>
      <img className="community__social" src={twitter}/>
    </div>
  </div>
};
