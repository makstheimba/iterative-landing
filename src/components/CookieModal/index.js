import React from 'react'
import { 
  ModalContainer, ModalBody, ModalText, ModalLink, ModalButton
  } from './CookieModal'



  
const CookieModal = (props) => {
  const [isOpen, setisOpen] = React.useState(true);


  
  function closeModal(){
    setisOpen(false);
  }


  
  return (    
    
    <ModalContainer isOpen={props.cookieOpen}>
      <ModalBody>
        <ModalText>By continuing, you're agreeing to our customer terms of service, 
          privacy policy and <ModalLink href="#">cookie policy</ModalLink>
        </ModalText>
        <ModalButton onClick={props.handleClose}>Apply</ModalButton>
      </ModalBody>
    </ModalContainer>
    
  )
}

export default CookieModal