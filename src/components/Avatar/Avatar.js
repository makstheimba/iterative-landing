import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

export default function Avatar({ image, color }) {
  const backgroundStyle = {
    backgroundImage: 'url(../../images/avatar-bg.svg)',
    objectFit: 'contain',
    color: { color },
  }
  return (
    <div style={{ color }} className="avatar">
      <div className="avatar__item"><img src={image} alt="avatar" className="avatar__item-img" /></div>
      <div className="avatar__item-background"></div>
    </div>
  )
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
