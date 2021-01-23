import styled from "styled-components";

export const Aboutbutton = styled.button`
  color: #FFFFFF;
  background: rgba(255,255,255,0);
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  position: relative;
  left: 0;
  transition: 0.5s ease;
  
  &:focus {
    outline: none;
  }

  &:hover {
    left: 8px;
    background: rgba(255,255,255,.2);
  }

  @media ${(props) => props.theme.breakpoints.lg}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
  }
`
