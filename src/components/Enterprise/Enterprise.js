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
margin-block-start: 0rem;
margin-block-end: 0rem;
margin-inline-start: 0rem;
margin-inline-end: 0rem;
overflow: hidden;
border-style: none;
border-width: 0rem;

width: 48px;
height: 0.375rem;
background: linear-gradient(90deg,#13ADC7, #945DD6);
border-radius: 1.875rem;
margin-bottom: 2rem;
`

export const Title = styled.h2`
font-family: "Roobert TRIAL", Arial, sans-serif;
font-style: normal;
font-weight: 800;
font-size: 3.5rem;
line-height: 3.5rem;
letter-spacing: 0.02em;

background: -webkit-linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

margin-bottom: 1.125rem;
`

export const Subtitle = styled.p`
font-family: "Roobert TRIAL", Arial, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 1.5rem;
line-height: 2.5rem;
letter-spacing: 0.02em;
color: rgba(255, 255, 255, 0.5);
max-width: 50rem;
margin-bottom: 5rem;
`

export const ImageContainer = styled.div`
text-align: center;
background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);

`

export const MainImage = styled.img`
padding: 3.75rem;
`

export const List = styled.ul`
list-style-type: none;
display: flex;
justify-content: space-between;
margin-top: 5.1875rem;
`

export const ListContainer = styled.div`
display: flex;
flex-direction: column;
`

export const ListTitle = styled.h4`
font-family: "Roobert TRIAL", Arial, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 1.75rem;
line-height: 2rem;
letter-spacing: 0.02em;
color: #FFFFFF;
margin-bottom: 0.5rem;
`

export const ListParagraph = styled.p`
font-family: "Roobert TRIAL", Arial, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 1.125rem;
line-height: 1.875rem;
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
margin-bottom: 0.5rem;

background-position: center;
object-fit: scale-down; 
background-repeat: no-repeat;
background-color: transparent;

background-image: url('../../images/Enterprise/icon/${props => props.icon}.svg');
`