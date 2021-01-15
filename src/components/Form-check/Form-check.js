import React from 'react';
import PropTypes from 'prop-types';
import './Form-check.css';

export default function FormCheck({ text, shape, isChecked }) {

  const buttonClass = isChecked
    ? `formcheck__button formcheck__button-${shape} formcheck__button-${shape}-checked`
    : `formcheck__button formcheck__button-${shape}`;

  return (
    <div className="formcheck">
      <button className={buttonClass}></button>
      <p className="formcheck__text">{text}</p>
    </div >
  )
}

FormCheck.prototype = {
  isChecked: PropTypes.bool,
  text: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['circle', 'square']),
  onClick: PropTypes.func,
}

FormCheck.defaultProps = {
  isChecked: false,
  shape: 'square',
  onClick: undefined,
};
