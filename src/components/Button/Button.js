import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({
  onClick,
  type = 'blue-gradient',
  children,
  size = 'default',
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      className={`button ${size === 'small' && 'button_size_small'}  ${
        size === 'medium' && 'button_size_medium'
      } button_color_${type}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    'blue-gradient',
    'orange-gradient',
    'light-blue',
    'black',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'default']),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};