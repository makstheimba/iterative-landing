import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

export default function Title({ size, title }) {
  if (size === 's') {
    return <h3 className={`title title_size_${size}`}>{title}</h3>
  } else if (size === 'm') {
    return <h2 className={`title title_size_${size}`}>{title}</h2>
  }
  return <h1 className={`title title_size_${size}`}>{title}</h1>
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']),
}
