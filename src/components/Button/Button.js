import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ onClick, type = 'blue-gradient', children }) {
  return (
    <button className={`button button_color_${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['blue-gradient', 'orange-gradient']),
  onClick: PropTypes.func.isRequired,
};

export default Button;
