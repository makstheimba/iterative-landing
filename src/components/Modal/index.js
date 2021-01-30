import React from 'react'
import { formValidator } from '../../utils/formvalidator'
import Button from '../GlobalStyles/Button'
import {Section} from '../GlobalStyles/index'
import { 
  ModalContainer, ModalForm, ModalTitle,
  ModalClose, ModalInput, ModalInputContainer,
  ModalInputClear, ModalError, ModalLabel, 
  ModalCheckboxContainer, ModalCheckbox, 
  ModalCheckboxLabel, ModalLink
  } from './Modal'

//import '../Modal/Modal.css'

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
    setAgree(e.target.checked);
    //set error
    formValidator.fieldValidator(e.target, setAgreeError);
  }

  const formRef = React.useRef();

  function validateForm(){
    formValidator.formValidator(formRef.current,'.popup__input') ? setFormInvalid(true) : setFormInvalid(false);
  }

  //delete field
  function handleClearInput(e, field){
    switch(field){
      case 'name':
        setName('');
        break;
      case 'email':
        setEmail('');
        break;
      case 'company':
        setCompany('');
        break;
      case 'phone':
        setPhone('');
        break;
    }
  }

  //submit form
  function handleSubmit(e){
    e.preventDefault();
    const fields = {name, email, company, phone, agree};
    submitForm(processInput(fields));
    props.handleClose();
  }

  function processInput(fields){
    fields.phone = fields.phone.replaceAll('-','');
    return fields;
  }

  function submitForm(input){
    console.log(input)
  }

    //reset fields when opened
    React.useEffect(()=>{
      setFormInvalid(true);
      setName('');
      setEmail('');
      setCompany('');
      setPhone('');
      setAgree(false);
  
      setNameError('');
      setEmailError('');
      setCompanyError('');
      setPhoneError('');
      setAgreeError('');
    },[props.isOpen])

  return (
    <ModalContainer isOpen={props.isOpen}>
      <ModalForm onChange={validateForm} onSubmit={e=>{handleSubmit(e)}} ref={formRef}>

        <ModalTitle>Request a demo
          <ModalClose onClick={props.handleClose} type="button"></ModalClose>
        </ModalTitle>
        
        <ModalInputContainer>
          <ModalInput error={nameError} id="name-input" type="text" name="name" required 
            minLength="2" maxLength="40" placeholder="Full name" value={name} onChange={handleName} />
          <ModalInputClear visible={name} onClick={e=>{handleClearInput(e,"name")}} type="button"/>
        </ModalInputContainer>
        <ModalError error={nameError}>{nameError}</ModalError>
        
        <ModalLabel error={emailError} value={email}>E-mail</ModalLabel>
        <ModalInputContainer>
          <ModalInput error={emailError} id="email-input" type="text" name="email" required 
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
            minLength="6" maxLength="40" placeholder="Enter email" value={email} onChange={handleEmail} />
            <ModalInputClear visible={email} onClick={e=>{handleClearInput(e,"email")}} type="button"/>
          </ModalInputContainer>
        <ModalError error={emailError}>{emailError}</ModalError>

        <ModalLabel error={companyError} value={company}>Company</ModalLabel>
        <ModalInputContainer>
          <ModalInput error={companyError} id="company-input" type="text" name="company" required 
            minLength="2" maxLength="40" placeholder="Enter company" value={company} onChange={handleCompany} />
          <ModalInputClear visible={company} onClick={e=>{handleClearInput(e,"company")}} type="button"/>
        </ModalInputContainer>
        <ModalError error={companyError}>{companyError}</ModalError>

        <ModalInputContainer>
          <ModalInput error={phoneError} id="phone-input" type="phone" name="phone" required 
            pattern="(1-[0-9]{3}-[0-9]{3}-[0-9]{4})|([0-9]{3}-[0-9]{3}-[0-9]{4})"
            minLength="12" maxLength="14" placeholder="Phone" value={phone} onChange={handlePhone} />
          <ModalInputClear visible={phone} onClick={e=>{handleClearInput(e,"phone")}} type="button"/>
        </ModalInputContainer>
        <ModalError error={phoneError}>{phoneError}</ModalError>

        <ModalCheckboxContainer>
          <ModalCheckbox error={agreeError} id="agree-input"  type="checkbox" name="agree" required
            minLength="12" maxLength="14" value={agree} onChange={handleAgree} />
          <ModalCheckboxLabel>I agree to Iterative’s <ModalLink href="#">Privacy Policy</ModalLink></ModalCheckboxLabel>
        </ModalCheckboxContainer>
        <ModalError error={agreeError}>{agreeError}</ModalError>
        
        <Button disabled={formInvalid} type="submit">Request a demo</Button>

      </ModalForm>
    </ModalContainer>
    
  )
}

export default Modal
