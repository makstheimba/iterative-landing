import React from 'react';
import './CompanyHighlight.css';
import Icon from '../Icon/Icon';

export default function CompanyHighlight({ title, text, icon, description }) {
  return (
    <li className="companyhighlight">
      <div className="companyhighlight__icon">
        <Icon
          icon={icon}
          linkDescription={description}
          widthPixelSizes={[32, 40, 48]}
        />
      </div>
      <div className="companyhighlight__text-container">
        <h4 className="companyhighlight__title">{title}</h4>
        <p className="companyhighlight__text">{text}</p>
      </div>
    </li>
  );
}
