import React from 'react'
import { 
  ModalContainer, ModalBody, ModalText, ModalLink, ModalButton
  } from './CookieModal'

const Modal = () => {
  const [isOpen, setisOpen] = React.useState(true);

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalBody>
        <ModalText>By continuing, you're agreeing to our customer terms of service, 
          privacy policy and <ModalLink href="#">cookie policy</ModalLink>
        </ModalText>
        <ModalButton onClick={setisOpen(false)}>Apply</ModalButton>
      </ModalBody>
    </ModalContainer>
    
  )
}

export default Modal
