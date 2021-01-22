import React from 'react';
import PropTypes from 'prop-types';
import './CompanyHighlight.css';
import Icon from '../Icon/Icon';

export default function CompanyHighlight({ icon, title, description }) {
  return (
    <li className="companyhighlight">
      <div className="companyhighlight__icon">
        <Icon icon={icon} widthPixelSizes={[32, 40, 48]} />
      </div>
      <div className="companyhighlight__text-container">
        <h4 className="companyhighlight__title">{title}</h4>
        <p className="companyhighlight__text">{description}</p>
      </div>
    </li>
  );
}

CompanyHighlight.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
