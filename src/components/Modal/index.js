import React from 'react'
import { formValidator } from '../../utils/formvalidator'
import { PopupWrapper } from './Modal'

import '../Modal/Modal.css'

const Modal = (props) => {

  //form vars
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [agree, setAgree] = React.useState(false);

  //form validation
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [companyError, setCompanyError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [agreeError, setAgreeError] = React.useState('');

  const [formInvalid, setFormInvalid] = React.useState(true);

  //form field handlers
  function handleName(e) {
    //set value
    setName(e.target.value);
    //set error
    formValidator.fieldValidator(e.target, setNameError);
  }

  function handleEmail(e) {
    //set value
    setEmail(e.target.value);
    //set error
    formValidator.fieldValidator(e.target, setEmailError);
  }
  
  function handleCompany(e) {
    //set value
    setCompany(e.target.value);
    //set error
    formValidator.fieldValidator(e.target, setCompanyError);
  }

  function handlePhone(e) {
    //set value
    setPhone(e.target.value);
    //set error
    formValidator.fieldValidator(e.target, setPhoneError);
  }

  function handleAgree(e) {
    //set value
    setAgree(e.target.value);
    //set error
    formValidator.fieldValidator(e.target, setAgreeError);
  }

  const formRef = React.useRef();

  function validateForm(){
    formValidator.formValidator(formRef.current,'.popup__input') ? setFormInvalid(true) : setFormInvalid(false);
  }

  //reset fields when opened
  React.useEffect(()=>{
    setFormInvalid(true);
    setName('');
    setEmail('');
    setCompany('');
    setPhone('');
    setAgree(false);
  },[props.isOpen])

  return (
    <section className={`popup ${props.isOpen  && 'popup_state_opened'}` } >
      <form className="popup__form" onChange={validateForm} ref={formRef}>
        <h4 className="popup__title">Request a demo<button className="popup__close" 
          onClick={props.handleClose} type="button"></button>
        </h4>
        
        <input className={`popup__input ${nameError !=='' && 'popup__input_type_error'} `} id="name-input" type="text" name="name" required minLength="2" maxLength="40" placeholder="Full name" value={name} onChange={handleName} />
        <span className={`popup__input-error" ${nameError !=='' && 'popup__error_visible'}`} id="name-input-error">{nameError}</span>
        
        <p className="popup__input-label">E-mail</p>
        <input className={`popup__input ${emailError !=='' && 'popup__input_type_error'} `} id="email-input" type="text" name="email" required minLength="2" maxLength="40" placeholder="Enter email" value={email} onChange={handleEmail} />
        <span className={`popup__input-error" ${emailError !=='' && 'popup__error_visible'}`} id="email-input-error">{emailError}</span>
        
        <p className="popup__input-label">Company</p>  
        <input className={`popup__input ${companyError !=='' && 'popup__input_type_error'} `} id="company-input" type="text" name="company" required minLength="2" maxLength="12" placeholder="Enter company" value={company} onChange={handleCompany} /> 
        <span className={`popup__input-error"  ${companyError !=='' && 'popup__error_visible'}`} id="company-input-error">{companyError}</span>
        
        <input className={`popup__input ${phoneError !=='' && 'popup__input_type_error'} `} id="phone-input" type="phone" name="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone" value={phone} onChange={handlePhone} /> 
        <span className={`popup__input-error" ${phoneError !=='' && 'popup__error_visible'}`} id="phone-input-error">{phoneError}</span>

        <div className="popup__checkbox-container">
          <input 
            className={`popup__checkbox ${agreeError !=='' && 'popup__input_type_error'} `} 
            id="agree-input" 
            type="checkbox" 
            name="agree" 
            required 
            value={agree} 
            onChange={handleAgree} 
          /><p className="popup__checkbox-label">I agree to Iterative’s <a className="popup__link" href="#">Privacy Policy</a></p>  
          </div>
          <span className={`popup__input-error" ${agreeError !=='' && 'popup__error_visible'}`} id="agree-input-error">{agreeError}</span>

        <button className={`popup__submit ${formInvalid && 'popup__submit_disabled'}`} disabled={formInvalid} type="submit">Request a demo</button>
      </form>
    </ section>
    
  )
}

export default Modal
