import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import clearIcon from '../../images/icn-clear.svg';
import './FormInput.css';

export default function FormInput({
  onChange,
  name,
  disabled,
  value,
  inputOpts,
  caption,
  inputType,
}) {
  const inputEl = useRef(null);
  const [isInputValid, setIsInputValid] = useState(true);
  const [inputValidationMessage, setValidationMessage] = useState('');
  const [isInputCaptionVisible, setIsInputCaptionVisible] = useState(false);
  const [isClearButtonVisible, setIsClearButtonVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(true);

  function handleChange(e) {
    const input = e.target;
    const isValid = input.validity.valid;
    setIsInputCaptionVisible(input.value !== '');
    setIsInputValid(isValid);
    setValidationMessage(input.validationMessage);
    setIsClearButtonVisible(input.value !== '');
    onChange({ val: input.value, isValid });
  }

  function clearInputValue() {
    inputEl.current.value = '';
    const input = inputEl.current;
    const isValid = input.validity.valid;
    setIsInputCaptionVisible(false);
    setIsInputValid(isValid);
    setValidationMessage(input.validationMessage);
    setIsClearButtonVisible(false);
    onChange({ val: '', isValid: isValid });
  }

  function handleInputFocus() {
    setIsInputFocused(true);
  }

  function handleInputBlur() {
    setIsInputFocused(false);
  }

  return (
    <div className={`form-input`}>
      <label
        className={`form-input__label ${
          !isInputValid && 'form-input__label_invalid'
        } ${!isInputCaptionVisible && 'form-input__label_hidden'} ${
          isInputFocused && 'form-input__label_focused'
        }`}
        htmlFor={`${name}-input`}
      >
        {caption}
      </label>
      <input
        disabled={disabled}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputEl}
        id={`${name}-input`}
        className={`form-input__input ${
          !isInputValid && 'form-input__input_invalid'
        } ${isClearButtonVisible && 'form-input__input_filled'}`}
        value={value}
        placeholder={caption}
        onChange={handleChange}
        type={inputType}
        {...inputOpts}
      />
      <button
        type="button"
        onClick={clearInputValue}
        className="form-input__clear-btn"
      >
        <Icon icon={clearIcon} widthPixelSizes={[16, 24, 24]} />
      </button>
      <span
        id={`${name}-input-error`}
        className={`form-input__error ${
          !inputValidationMessage && 'form-input__error_hidden'
        } ${isInputValid && 'form-input__error_active'}`}
      >
        {inputValidationMessage}
      </span>
    </div>
  );
}

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  inputOpts: PropTypes.object,
  caption: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
};
