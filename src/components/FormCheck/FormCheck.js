import React from 'react';
import PropTypes from 'prop-types';
import './FormCheck.css';

export default function FormCheck({ text, shape, onChange }) {
  function onKeyUp(e) {
    if (e.key === 'Enter') {
      e.target.click();
    }
  }

  function handleChange(e) {
    onChange(e.target.checked);
  }

  return (
    <label className="formcheck formcheck__text">
      {text}
      {shape === 'square' && (
        <input
          type="checkbox"
          className="formcheck__input"
          onKeyUp={onKeyUp}
          onChange={handleChange}
        />
      )}
      {shape === 'circle' && (
        <input
          type="radio"
          className="formcheck__input"
          onKeyUp={onKeyUp}
          onChange={handleChange}
        />
      )}
      <span className={`formcheck__button formcheck__button-${shape}`}></span>
    </label>
  );
}

FormCheck.prototype = {
  text: PropTypes.node.isRequired,
  shape: PropTypes.oneOf(['circle', 'square']),
  onChange: PropTypes.func,
};

FormCheck.defaultProps = {
  shape: 'square',
};
