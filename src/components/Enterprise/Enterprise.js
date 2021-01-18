import styled, {css} from 'styled-components'

export const Section = styled.section`
padding: 0 6.25% 6.25% 6.25%;
max-width: 1200px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
`
export const Accent = styled.hr`
display: block;
unicode-bidi: normal;
margin-block-start: 0px;
margin-block-end: 0px;
margin-inline-start: 0px;
margin-inline-end: 0px;
overflow: hidden;
border-style: none;
border-width: 0px;

width: 48px;
height: 6px;
background: linear-gradient(90deg,#13ADC7, #945DD6);
border-radius: 30px;
margin-bottom: 32px;
`

export const Title = styled.h2`
font-family: "Roobert TRIAL", Arial, sans-serif;
font-style: normal;
font-weight: 800;
font-size: 56px;
line-height: 56px;
letter-spacing: 0.02em;

background: -webkit-linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

margin-bottom: 18px;
`

export const Subtitle = styled.p`
font-family: "Roobert TRIAL", Arial, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 40px;
letter-spacing: 0.02em;
color: rgba(255, 255, 255, 0.5);
max-width: 800px;
margin-bottom: 80px;
`

export const ImageContainer = styled.div`
text-align: center;
background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
`

export const MainImage = styled.img`
padding: 60px;
`

export const List = styled.ul`
list-style-type: none;
display: flex;
justify-content: space-between;
margin-top: 83px;
`

export const ListContainer = styled.div`
display: flex;
flex-direction: column;
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
`

export const ListParagraph = styled.p`
font-family: "Roobert TRIAL", Arial, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
letter-spacing: 0.02em;
color: rgba(255, 255, 255, 0.75);
`

export const ListItem = styled.li`
max-width: 320px;
display: flex;
flex-direction: column;
`

export const ListIcon = styled.i`
display: block;
width: 48px;
height: 48px;
margin-bottom: 8px;

background-position: center;
object-fit: scale-down; 
background-repeat: no-repeat;
background-color: transparent;

background-image: url('../../images/Enterprise/icon/${props => props.icon}.svg');
`