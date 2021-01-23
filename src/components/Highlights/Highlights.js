import React from 'react';
import PropTypes from 'prop-types';
import './Highlights.css';
import gear from '../../images/gear.svg'
import code from '../../images/code.svg'
import shield from '../../images/shield.svg'

export default function Highlights() {
  return <ul className="highlights">
    <li className="highlights__feature">
      <img src={gear} className="highlights__icon"/>
      <h2 className="highlights__tite">Familiar</h2>
      <p className="highlights__text">Don’t reinvent the wheel! Fast and cost-efficient path to production.</p>
    </li>
    <li className="highlights__feature">
      <img src={code} className="highlights__icon"/>
      <h2 className="highlights__tite">Open Source</h2>
      <p className="highlights__text">Lightweight. Open-source. No-strings attached.</p>
    </li>
    <li className="highlights__feature">
      <img src={shield} className="highlights__icon"/>
      <h2 className="highlights__tite">Secure</h2>
      <p className="highlights__text">You data is always stored by you. Your models are trained on your machines.</p>
    </li>
  </ul>
};
