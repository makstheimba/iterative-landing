import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({
  onClick,
  type = 'blue-gradient',
  children,
  size = 'default',
  disabled,
  typeAttr = 'button',
}) {
  return (
    <button
      type={typeAttr}
      disabled={disabled}
      className={`button ${size === 'small' && 'button_size_small'}
       ${size === 'medium' && 'button_size_medium'}
      ${size === 'large' && 'button_size_large'}
      button_color_${type}`}
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
  size: PropTypes.oneOf(['small', 'medium', 'large', 'default']),
  typeAttr: PropTypes.oneOf(['submit', 'reset', 'button']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
