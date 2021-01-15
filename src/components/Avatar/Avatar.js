import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

export default function Avatar({ image, color }) {
  return (
    <div className="avatar">
      <div className="avatar__item"><img src={image} alt="avatar" className="avatar__item-img" /></div>
      <div style={{ border: `${color} solid 2px` }} className="avatar__item avatar__item-background"></div>
    </div>
  )
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
