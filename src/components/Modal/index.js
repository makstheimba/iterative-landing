import React from 'react'
import { formValidator } from '../../utils/formvalidator'
import { 
  ModalContainer, ModalForm, ModalTitle,
  ModalClose, ModalInput, ModalError,
  ModalLabel, ModalCheckboxContainer,
  ModalCheckbox, ModalCheckboxLabel,
  ModalLink, ModalSubmit
  } from './Modal'

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

  function formatPhoneNumber(num){
    //replace non-number vars
    num = num.replace(/\D/gi,'');
    //add dashes
    if(num.length > 3 && num.length <= 12){
      num = num.slice(0, 3) + "-"+ num.slice(3);
    }
    if(num.length > 7 && num.length <= 12){
      num = num.slice(0,7) + "-" + num.slice(7);
    }

    if(num.length > 12){
      num = num.replaceAll('-','');
      num = num.slice(0,1) + "-" + num.slice(1,4) + "-"+ num.slice(4,7) + "-" + num.slice(7);
    }

    return num
  }

  function handlePhone(e) {
    //set value
    setPhone(formatPhoneNumber(e.target.value));

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

  //submit form
  function handleSubmit(e){
    e.preventDefault();
    const fields = {name, email, company, phone, agree};
    const input = processInput(fields);
    //props.handleSubmit(input);
    props.handleClose();
  }

  function processInput(fields){
    fields.phone = fields.phone.replaceAll('-','');
    return fields;
  }

  return (
    <ModalContainer isOpen={props.isOpen}>
      <ModalForm onChange={validateForm} onSubmit={e=>{handleSubmit(e)}} ref={formRef}>
        <ModalTitle>Request a demo
          <ModalClose onClick={props.handleClose} type="button"></ModalClose>
        </ModalTitle>
        
        <ModalInput error={nameError} id="name-input" type="text" name="name" required 
          minLength="2" maxLength="40" placeholder="Full name" value={name} onChange={handleName} />
        <ModalError error={nameError}>{nameError}</ModalError>
        
        <ModalLabel>E-mail</ModalLabel>
        <ModalInput error={emailError} id="email-input" type="text" name="email" required 
          minLength="2" maxLength="40" placeholder="Enter email" value={email} onChange={handleEmail} />
        <ModalError error={emailError}>{emailError}</ModalError>

        <ModalLabel>Company</ModalLabel>
        <ModalInput error={companyError} id="company-input" type="text" name="company" required 
          minLength="2" maxLength="40" placeholder="Enter company" value={company} onChange={handleCompany} />
        <ModalError error={companyError}>{companyError}</ModalError>

        <ModalInput error={phoneError} id="phone-input" type="phone" name="phone" required 
          pattern="(1-[0-9]{3}-[0-9]{3}-[0-9]{4})|([0-9]{3}-[0-9]{3}-[0-9]{4})"
          minLength="12" maxLength="14" placeholder="Phone" value={phone} onChange={handlePhone} />
        <ModalError error={phoneError}>{phoneError}</ModalError>

        <ModalCheckboxContainer>
          <ModalCheckbox error={agreeError} id="agree-input"  type="checkbox" name="agree" required
            minLength="12" maxLength="14" value={agree} onChange={handleAgree} />
          <ModalCheckboxLabel>I agree to Iterative’s<ModalLink>Privacy Policy</ModalLink></ModalCheckboxLabel>
        </ModalCheckboxContainer>
        <ModalError error={agreeError}>{agreeError}</ModalError>

        <ModalSubmit disabledStyle={formInvalid} disabled={formInvalid} type="submit">Request a demo</ModalSubmit>

      </ModalForm>
    </ModalContainer>
    
  )
}

export default Modal
