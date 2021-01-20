import styled from 'styled-components'

export const Section = styled.section`
  padding: 32px 48px 0;
  max-width: 1040px;
  width: calc(100vw - 96px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: initial;
  
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 24px 48px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 16px 16px 0;
    width: calc(100vw - 32px);
  }
`

export const Accent = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 32px;
    height: 2px;
  }
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 56px;
  max-width: 300px;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 18px;

  @media ${props => props.theme.breakpoints.lg}{
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 12px;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
  }
`

export const Subtitle = styled.p`
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
  max-width: 800px;
  margin-bottom: 80px;

  @media ${props => props.theme.breakpoints.lg}{
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 24px;  
    margin-bottom: 32px;
}
`

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;

  @media screen and (max-width:1024px){
    background-image: none;
    padding: 0;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 80px 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    flex-direction: column;
    margin-top: 32px;
    max-width: 320px;
    margin-bottom: 44px;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    max-width: 240px;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
font-family: "Roobert TRIAL", Arial, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 32px;
letter-spacing: 0.02em;
color: #FFFFFF;
margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.lg}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.md}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
max-width: 320px;
display: flex;
flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 202.67px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const ListIcon = styled.img`
display: block;
width: 48px;
height: 48px;
margin-bottom: 10px;

@media ${props => props.theme.breakpoints.sm}{
  width: 32px;
  height: 32px;
  margin-bottom: 0px;
}
`
