import { Link } from "gatsby";
import styled from "styled-components";

export const CardList = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px;

    max-width: 1120px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    @media ${props => props.theme.breakpoints.md}{
      gap: 0;
      display: flex;
      flex-direction: column;
    }

`

export const Cards = styled.div`
  background: #212D45;
  border-radius: 16px;
  display: flex;
  flex-direction:column;
  padding: 32px;
  max-width: 357.33px;
  
  
  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    max-width: 672px;
    margin: ${(props) => props.bottom ? '24px 0' : '0'};

  }


@media ${props => props.theme.breakpoints.sm}{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  max-width: 288px;
  margin: ${(props) => props.bottom ? '8px 0' : '0'};
}

`

export const CardsTitle = styled.h3`


  color: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.01em;

font-size: 36px;
line-height: 40px;


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



@media ${props => props.theme.breakpoints.md}{
    font-size: 20px;
     line-height: 32px;
};

@media ${props => props.theme.breakpoints.sm}{
font-size: 16px;
line-height: 20px;
}


`

export const CardsText = styled.p`
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
letter-spacing: 0.02em;
color: rgba(255, 255, 255, 0.75);
margin-top: 16px;
border-top: 1px solid rgba(255, 255, 255, 0.1);
margin-bottom: 48px;

@media ${props => props.theme.breakpoints.md}{
font-size: 16px;
line-height: 28px;
}
@media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
}
`















export const CardsLogosContainer = styled.div`
display: flex;
align-self: ${(props) => props.enterprise ? "center" :""};


`
export const CardsLogoDivider = styled.div`
display: none;
  @media ${props => props.theme.breakpoints.sm}{
    display: block;
    border: 1px solid rgba(255, 255, 255, 0.33);
    width: 1px;
    transform: rotate(180deg );
   margin: 0 11px;
  }


`

export const CardsLogoLink = styled(Link)`
display: flex;
align-items: center;

`




export const CardLogo = styled.img`
  width: 32px;
  height: 32px;
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
@media ${props => props.theme.breakpoints.sm}{
  font-size: 14px;
  line-height: 16px;
  max-width: 74px;


}

`












export const CardButton = styled.button`
padding: 16px 24px;
width: fit-content;

background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
border-radius: 999px;


font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.01em;
color: #FFFFFF;
margin-top: 40px;

@media ${props => props.theme.breakpoints.sm}{
  padding: 8px 16px;
  font-size: 14px;
  line-height: 16px;
  width: 240px;
  margin-top: 32px;

}

`