import { Link } from "gatsby";
import styled from "styled-components";

export const CardList = styled.div`
    padding: 48px 0 80px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 24px;

    @media ${props => props.theme.breakpoints.lg}{
      grid-template-columns: 1fr;
      align-items: center;
      padding: 40px 0 64px;
    }

    @media ${props => props.theme.breakpoints.sm}{
      padding: 16px 0 0;
      gap: 16px;
    }
`

export const Cards = styled.div`
  background: #212D45;
  border-radius: 16px;
  display: flex;
  min-height: 480px;
  flex-direction:column;
  padding: 32px;

  @media ${props => props.theme.breakpoints.lg}{
    min-height: 250px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    padding: 24px;
  }
`

export const CardsTitle = styled.h3`
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
  font-weight: 600;
  letter-spacing: 0.01em;
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 28px;
    line-height: 32px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 24px;
    line-height: 26px;
    margin-bottom: 8px;
  }
`

export const CardsSubTitle = styled.p`
  color: #FFFFFF;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.02em;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
  height: 64px;

  @media ${props => props.theme.breakpoints.lg}{
    font-size: 20px;
    line-height: 32px;
    height: 32px;
  };

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 16px;
    line-height: 20px;
    height: 20px;
  };
`

export const CardsText = styled.p`
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 16px;
  padding-bottom: 32px;
  margin-bottom: auto;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }
  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const CardsLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 16px;

  @media ${props => props.theme.breakpoints.lg}{
    margin:0;
    border-right: ${props => props.border ? " 1px solid rgba(255, 255, 255, 0.33)" : ""};
    &:nth-child(1){
      margin-right:16px;
    }
  }
`

export const CardLogo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  @media ${props => props.theme.breakpoints.sm}{
    width: 24px;
    height: 24px;
    margin-right: 11px;
}
`

export const CardLogoText = styled.p`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.01em;
color: #FFFFFF;
@media ${props => props.theme.breakpoints.lg}{
  margin-right: ${props => props.right ? "16px" : "0"}
}
@media ${props => props.theme.breakpoints.sm}{
  font-size: 14px;
  line-height: 16px;
  max-width: 74px;
}
`

export const BtnContainer = styled.div`
display: flex;
height: min-content;
margin-top: auto;
`

export const CardButton = styled.button`
padding: 16px 24px;
width: fit-content;

margin-top: auto;
background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
border-radius: 999px;


font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.01em;
color: #FFFFFF;
margin-top: 40px;

&:hover {
 
   cursor: pointer;
  };
@media ${props => props.theme.breakpoints.sm}{
  padding: 8px 16px;
  font-size: 14px;
  line-height: 16px;
  width: 240px;
  margin-top: 32px;

}

`