import * as React from 'react';

import './Logo.css';
import logoImg from '../../images/iterative-icon.svg';
import label from '../../images/iterative.svg';

export function Logo() {
  return (
    <div className="logo">
      <img className="logo logo__icon" src={logoImg} alt="Iterative logo icon" />
      <img className="logo logo__label" src={label} alt="Logo label saying iterative" />
    </div>
  );
}

