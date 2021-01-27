import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import FormPopup from '../FormPopup/FormPopup';
import FormInput from '../FormInput/FormInput';
import FormCheck from '../FormCheck/FormCheck';
import './RequestDemoForm.css';

export default function RequestDemoForm({ onClose, visible, onSubmit }) {
  const [fullNameVal, setFullNameVal] = useState('');
  const [isFullNameValid, setIsFullNameValid] = useState(false);
  const [emailVal, setEmailVal] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [companyVal, setCompanyVal] = useState('');
  const [isCompanyValid, setIsCompanyValid] = useState(false);
  const [phoneVal, setPhoneVal] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isPrivacyAgreementChecked, setIsPrivacyAgreementChecked] = useState(
    false
  );
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleFullNameInputChange({ val, isValid }) {
    setFullNameVal(val);
    setIsFullNameValid(isValid);
    setIsFormValid(
      isValid &&
        isEmailValid &&
        isCompanyValid &&
        isPhoneValid &&
        isPrivacyAgreementChecked
    );
  }

  function handleEmailInputChange({ val, isValid }) {
    setEmailVal(val);
    setIsEmailValid(isValid);
    setIsFormValid(
      isValid &&
        isFullNameValid &&
        isCompanyValid &&
        isPhoneValid &&
        isPrivacyAgreementChecked
    );
  }

  function handleCompanyInputChange({ val, isValid }) {
    setCompanyVal(val);
    setIsCompanyValid(isValid);
    setIsFormValid(
      isValid &&
        isFullNameValid &&
        isEmailValid &&
        isPhoneValid &&
        isPrivacyAgreementChecked
    );
  }

  function handlePhoneInputChange({ val, isValid }) {
    setPhoneVal(val);
    setIsPhoneValid(isValid);
    setIsFormValid(
      isValid &&
        isFullNameValid &&
        isEmailValid &&
        isCompanyValid &&
        isPrivacyAgreementChecked
    );
  }

  function handlePrivacyPolicyAgreementChange(checked) {
    setIsPrivacyAgreementChecked(checked);
    setIsFormValid(
      checked &&
        isFullNameValid &&
        isEmailValid &&
        isCompanyValid &&
        isPhoneValid
    );
  }

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      fullName: fullNameVal,
      email: emailVal,
      company: companyVal,
      phone: phoneVal,
    };
    onSubmit(data).finally(() => {
      setIsLoading(false);
    });
  }

  return (
    <FormPopup
      title="Request a demo"
      buttonText="Request a demo"
      isButtonDisabled={!isFormValid}
      onClose={onClose}
      visible={visible}
      onSubmit={handleSubmit}
    >
      <FormInput
        onChange={handleFullNameInputChange}
        value={fullNameVal}
        caption="Full name"
        name="full-name"
        disabled={isLoading}
        inputOpts={{ required: true, type: 'text' }}
      />
      <FormInput
        onChange={handleEmailInputChange}
        value={emailVal}
        caption="E-mail"
        name="e-mail"
        disabled={isLoading}
        inputOpts={{ required: true, type: 'email' }}
      />
      <FormInput
        onChange={handleCompanyInputChange}
        value={companyVal}
        caption="Company"
        name="company"
        disabled={isLoading}
        inputOpts={{
          required: true,
          type: 'text',
        }}
      />
      <FormInput
        onChange={handlePhoneInputChange}
        value={phoneVal}
        caption="Phone"
        name="phone"
        disabled={isLoading}
        inputOpts={{
          required: true,
          type: 'tel',
          pattern: '^[0-9]+$',
          minLength: '10',
          maxLength: '10',
        }}
      />
      <FormCheck
        onChange={handlePrivacyPolicyAgreementChange}
        text={
          <span>
            I agree to Iterative’s{' '}
            <Link className="request-demo-form__link" to="/">
              Privacy Policy
            </Link>
          </span>
        }
      />
    </FormPopup>
  );
}

RequestDemoForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
