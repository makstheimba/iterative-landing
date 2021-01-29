import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  visibility: ${(props) => props.isOpen ? 'visible' : 'hidden'};
  transition: visibility 0s, opacity 0.2s linear;
  opacity: ${(props) => props.isOpen ? 1 : 0};
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 5; 
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
  z-index: 10;
  margin: auto;
  position: relative;

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
  opacity: 1.0;
  z-index: 2;

  background-image: url("../../images/Modal/icon/close.svg");
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