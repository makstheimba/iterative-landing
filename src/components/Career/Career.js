import styled from "styled-components";

export const Aboutbutton = styled.button`
  color: #FFFFFF;
  background: #0F1624;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 30px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px; 
  


@media ${(props) => props.theme.breakpoints.md}{
  margin-top: 24px; 

  padding: 16px 24px;
  width: fit-content;
  font-size: 20px;
  line-height: 20px;
}

@media ${(props) => props.theme.breakpoints.sm} {
  margin-top:16px;
  padding: 8px 16px;
  max-width: 288px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  }



`