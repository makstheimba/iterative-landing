import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

export default function Title({ size, title }) {
  if (size === 's' || 'xs') {
    return <h4 className={`title title_size_${size}`}>{title}</h4>;
  } else if (size === 'm') {
    return <h2 className={`title title_size_${size}`}>{title}</h2>;
  }
  return <h1 className={`title title_size_${size}`}>{title}</h1>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l']),
};