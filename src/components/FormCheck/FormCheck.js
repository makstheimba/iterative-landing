import React from 'react';
import PropTypes from 'prop-types';
import './FormCheck.css';

export default function FormCheck({ text, shape, onChange }) {
  function onKeyUp(e) {
    if (e.key === 'Enter') {
      e.target.click();
    }
  }

  return (
    <label className="formcheck formcheck__text">{text}
      { shape === "square" && <input type="checkbox" className="formcheck__input" onKeyUp={onKeyUp} onChange={onChange} />}
      { shape === "circle" && <input type="radio" className="formcheck__input" onKeyUp={onKeyUp} onChange={onChange} />}
      <span className={`formcheck__button formcheck__button-${shape}`}></span>
    </label>
  )
}

FormCheck.prototype = {
  text: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['circle', 'square']),
  onChange: PropTypes.func,
}

FormCheck.defaultProps = {
  shape: 'square',
};
