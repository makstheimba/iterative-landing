import styled from 'styled-components'
import CloseButtonImg from '../../images/Modal/icon/close.svg'
import ClearFieldImg from '../../images/Modal/icon/clear.svg'

export const ModalContainer = styled.div`
  position: fixed;
  visibility: ${(props) => props.isOpen ? 'visible' : 'hidden'};
  transition: visibility 0s, opacity 0.2s linear;
  opacity: ${(props) => props.isOpen ? 1 : 0};
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 0; 
  left: 0; 
  top: 0;
`

export const ModalForm = styled.form`
  max-width: 814px;
  background-color: white;

  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: auto;
  position: relative;
  z-index: 1; 

  @media ${props => props.theme.breakpoints.md}{
      padding: 32px;
    }

  @media ${props => props.theme.breakpoints.sm}{
      padding: 24px;
    }
`

export const ModalTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #0F1624;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-bottom: 22px;  

  display: flex;
  justify-content: space-between;

  @media ${props => props.theme.breakpoints.md}{
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 24px;
  }
`
export const ModalClose = styled.button`
  width: 24px;
  height: 24px;
  z-index: 2;

  background-image: url(${CloseButtonImg});
  background-position: center;
  object-fit: cover; 
  background-repeat: no-repeat;
  border: none;
  align-self: center;
  background-color: transparent;

  @media ${props => props.theme.breakpoints.sm}{
    width: 16px;
    height: 16px;
  }

  &:hover{
    cursor: pointer;
    opacity: 0.6;
  }
`

export const ModalInput = styled.input`
  width: 734px;
  border: 2px solid rgba(15, 22, 36, 0.1);
  border-radius: 8px;
  padding: 16px;

  &:focus{
    border: 2px solid rgba(15, 22, 36, 0.5);
  }

  @media ${props => props.theme.breakpoints.md}{
    width: 656px;
    margin-bottom: 24px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 272px;
    margin-bottom: 16px;
    padding: 8px;
    font-size: 16px;
    line-height: 20px;
  }

  ${(props) => (props.value.length > 0 && !props.error) &&
    `border: 2px solid #13ADC7;`
  };

  ${(props) => props.error &&
    `border: 2px solid #FF3333
    color:  #FF0000;`
  };

  ${(props) => (props.disabled) &&
    `background: rgba(15, 22, 36, 0.1);
    border: 2px solid rgba(15, 22, 36, 0.1);
    `
  };
`

export const ModalInputContainer = styled.div`
  position: relative;
`

export const ModalInputClear = styled.button`
  position: absolute; 
  top: 15px;
  right: 15px;

  width: 24px;
  height: 24px;
  z-index: 2;

  background-image: url(${ClearFieldImg});
  background-position: center;
  object-fit: cover; 
  background-repeat: no-repeat;
  border: none;
  align-self: center;
  background-color: transparent;
  visibility: ${(props) => props.visible.length != 0 ? 'visible' : 'hidden'};
  display: ${(props) => props.visible.length != 0 ? 'block' : 'none'};

  @media ${props => props.theme.breakpoints.sm}{
    top: 9px;
    right: 9px;
    width: 16px;
    height: 16px;
  }
`

export const ModalError = styled.span`
  max-width: 734px;
  margin-bottom: 32px;

  @media ${props => props.theme.breakpoints.md}{
    max-width: 656px;

    ${(props) => props.error &&
      `font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.01em;`
    };
  }

  @media ${props => props.theme.breakpoints.sm}{
    max-width: 272px;
  }

  ${(props) => props.error &&
    `font-weight: normal;
    font-size: 14px;
    line-height: 16px; 
    letter-spacing: 0.01em;
    color: #FF3333;`
  };
`
export const ModalLabel = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: rgba(15, 22, 36, 0.5);
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 14px;
    line-height: 16px;
  }

  ${(props) => (props.value.length > 0 && !props.error) &&
    `color: #13ADC7;`
  };

  ${(props) => props.error &&
    `color:  #FF0000;`
  };
`
export const ModalCheckboxContainer = styled.div`
  display: flex;
`
export const ModalCheckbox = styled.input`
  width: 24px;
  height: 24px;
  border: 4px solid rgba(15, 22, 36, 0.5);
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 16px;

  &:checked{
    background: #13ADC7;
  }
  
  @media ${props => props.theme.breakpoints.md}{
    border: 2px solid rgba(15, 22, 36, 0.5);
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 16px;
    height: 16px;
    margin-right: 12px;
    border: 1Ipx solid rgba(15, 22, 36, 0.5);

  }
`
export const ModalCheckboxLabel = styled.span`
  margin-block-start: 0px;
  margin-block-end: 0px;

  font-size: 20px;
  line-height: 24px;
  color: #0F1624;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 18px;
    line-height: 20px;  
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 16px;
    line-height: 20px;
  }
`
export const ModalLink = styled.a`
  text-decoration: underline;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #0F1624;
`
export const ModalSubmit = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  width: 358px;
  height: 64px;
  border-radius: 100px;
  background: #2F71E5;
  margin: 48px auto 0px auto;
  color: white;
  cursor: pointer;
  opacity: 1.0;
  border-style: none;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }

  ${(props) => props.disabledStyle &&
    `background: #E6E8EB;
    color: #B6BCBF;
    opacity: 0.2;`
  };
`