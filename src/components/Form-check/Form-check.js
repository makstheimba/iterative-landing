import React from 'react';
import PropTypes from 'prop-types';
import './Form-check.css';

export default function FormCheck({ text, shape }) {

  return (
    <label className="formcheck formcheck__text">{text}
      <input type="checkbox" className="formcheck__input" />
      <span className={`formcheck__button formcheck__button-${shape}`}></span>
    </label>
  )
}

FormCheck.prototype = {
  text: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['circle', 'square']),
}

FormCheck.defaultProps = {
  shape: 'square',
};
