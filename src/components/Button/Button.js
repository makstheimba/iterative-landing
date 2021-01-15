import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  onClick,
  type = 'blue-gradient',
  children,
  size = 'default',
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      className={`button ${
        size === 'small' && 'button_size_small'
      } button_color_${type}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['blue-gradient', 'orange-gradient', 'light-blue']),
  size: PropTypes.oneOf(['small', 'default']),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
