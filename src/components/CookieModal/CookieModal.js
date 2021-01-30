import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  visibility: ${(props) => props.isOpen ? 'visible' : 'hidden'};
  transition: visibility 0s, opacity 0.2s linear;
  opacity: ${(props) => props.isOpen ? 1 : 0};
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 1; 
  left: 0; 
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalBody = styled.div`
  max-width: 740px;
  background-color: white;

  padding: 21px;
  border-radius: 10px;
  margin: auto;
  position: relative;
  z-index: 2; 

  @media ${props => props.theme.breakpoints.md}{
    max-width: 480px;
    padding: 16px;
    }

  @media screen and (max-width: 720px){
    max-width: 210px;
    }
`
export const ModalText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #212D45;
`
export const ModalButton = styled.button`
  margin-left: 16px
  background: #13ADC7;
  border: 1px solid #13ADC7;
  border-radius: 999px;
  color: #FFFFFF;
  padding: 8px 16px;
  width: 70px;
  height: 32px;

  &:hover{
    background: #15C2E0;
    border: 1px solid #15C2E0;
  }

  &:focus{
    background: #13ADC7;
    border: 1px solid #15C2E0;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: #15C2E0;
    opacity: 0.5;
    border: 1px solid #15C2E0;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  
    @media ${props => props.theme.breakpoints.md}{
      font-size: 16px;
      line-height: 20px;
    }
    @media ${props => props.theme.breakpoints.sm}{
      font-size: 16px;
      line-height: 20px;
    }
  }
`
export const ModalLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #13ADC7;

  &:hover{
    opacity: 0.5;
    cursor: pointer;
  }
`