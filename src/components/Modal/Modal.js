import styled from 'styled-components'
import CloseButtonImg from '../../images/Modal/icon/close.svg'
import ClearFieldImg from '../../images/Modal/icon/clear.svg'
import ClearFieldImgS from '../../images/Modal/icon/clear-s.svg'


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

export const ModalForm = styled.form`
  min-width: 814px;
  background-color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: auto;
  position: relative;
  z-index: 2; 

  @media ${props => props.theme.breakpoints.md}{
      min-width: 720px;
      max-width: calc(100vw - 16 * 2);
      padding: 32px;
    }

  @media screen and (max-width: 720px){
      min-width: 320px;
      max-width: calc(100vw - 8 * 2);
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
  margin-bottom: 40px;  

  display: flex;
  justify-content: space-between;

  @media ${props => props.theme.breakpoints.md}{
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 32px;  
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
  z-index: 3;

  background-image: url(${CloseButtonImg});
  background-position: center;
  object-fit: cover; 
  background-repeat: no-repeat;
  border: none;
  align-self: center;
  background-color: transparent;

  &:hover{
    cursor: pointer;
    opacity: 0.6;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 16px;
    height: 16px;
  }
`

export const ModalInputContainer = styled.div`
  position: relative;
  max-width: 734px;

  @media ${props => props.theme.breakpoints.md}{
    max-width: 656px;
    width: calc(100vw - 32 * 2)
  }

  @media ${props => props.theme.breakpoints.sm}{
    max-width: 272px;
    width: calc(100vw - 24* 2)
  }
`

export const ModalInput = styled.input`
  width: 100%;
  border: 2px solid rgba(15, 22, 36, 0.1);
  border-radius: 8px;
  padding: 16px;
  font-size: 20px;
  line-height: 24px;

  &:focus{
    border: 2px solid rgba(15, 22, 36, 0.5);
  }


  @media ${props => props.theme.breakpoints.sm}{
    padding: 8px;
    font-size: 16px;
    line-height: 20px;
  }

  ${(props) => (props.value.length > 0 && !props.error) &&
    `border: 2px solid #13ADC7;`
  };

  ${(props) => props.error &&
    `border: 2px solid #FF3333;
    color:  #FF0000;`
  };

  ${(props) => (props.disabled) &&
    `background: rgba(15, 22, 36, 0.1);
    border: 2px solid rgba(15, 22, 36, 0.1);
    `
  };
`

export const ModalInputClear = styled.button`
  position: absolute; 
  top: 17px;
  right: 17px;

  width: 24px;
  height: 24px;
  z-index: 4;

  background-position: center;
  object-fit: cover; 
  background-repeat: no-repeat;
  align-self: center;
  background: transparent;
  background-image: url(${ClearFieldImg});

  border: none;
  border-radius: 100%;

  visibility: ${(props) => props.visible.length !== 0 ? 'visible' : 'hidden'};
  display: ${(props) => props.visible.length !== 0 ? 'block' : 'none'};

  &:hover{
    cursor: pointer;
  }

  @media ${props => props.theme.breakpoints.sm}{
    top: 12px;
    right: 12px;
    width: 16px;
    height: 16px;
    background-image: url(${ClearFieldImgS});
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
  border-radius: 4px;
  margin-right: 16px;

  &:checked{
    background-color: #13ADC7;
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

  @media ${props => props.theme.breakpoints.md}{
    font-size: 18px;
    line-height: 20px;  
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 16px;
    line-height: 20px;
  }
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