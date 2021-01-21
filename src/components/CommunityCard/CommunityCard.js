import React from 'react';
import PropTypes from 'prop-types';
import './CommunityCard.css';

export default function CommunityCard({ title, description }) {
  return (
    <li className="communitycard">
      <h3 className="communitycard__title">{title}</h3>
      <p className="communitycard__description">{description}</p>
    </li>
  );
}

CommunityCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
