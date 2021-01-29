import React from 'react';
import PropTypes from 'prop-types';
import './PricingCard.css';
import Title from '../Title/Title';

export default function PricingCard({
  title,
  subtitle,
  description,
  children,
}) {
  return (
    <li className="pricing-card">
      <Title title={title} size="s" />
      <h5 className="pricing-card__subtitle">{subtitle}</h5>
      <p className="pricing-card__text">{description}</p>
      {children}
    </li>
  );
}

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
