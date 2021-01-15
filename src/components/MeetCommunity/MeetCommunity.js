import styled from "styled-components"

export const CommunitySection = styled.section`
max-width: 1280px;
margin: 0 auto;
`

export const ContainerCommunity = styled.div`
max-width: 1040px;
margin: 0 auto;
border-top: ${props => props.line ? "1px solid rgba(255, 255, 255, 0.1);" : ""}
`
export const SectionTitle = styled.h2`
font-size: 56px;
line-height: 56px;
font-weight: 700;
color: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
margin-bottom: 40px;

`

export const Boxes = styled.div`
border: 1px solid red;
height: 156px;
list-style: none;
display: flex;
max-width: 1040px;
justify-content: space-between;
margin-bottom: 40px;

`
export const Box = styled.div`
width: 242px;
height: 126px;
background: #212D45;
border-radius: 12px;
padding: 24px;
&:first-child{
  height: 100%;
}

`
export const BoxNum = styled.h5`
font-size:36px;
font-weight: 600;
line-height: 40px;
letter-spacing: 0.01em;
margin-bottom: 8px;

`

export const BoxText = styled.p`
line-height: 30px;
letter-spacing: 0.02em;
font-size: 1.125rem;
color: rgba(255, 255, 255, 0.75);

`

export const Join = styled.div`
max-width: 1040px;
border: 1px solid red;
display: flex;
margin-bottom: 80px;
justify-content: center;
`
export const JoinText = styled.h5`
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 40px;
letter-spacing: 0.02em;
margin-right: 44px;
font-size: 24px;
letter-spacing: 0.02em;
color: rgba(255, 255, 255, 0.5);
`
export const IconContainer = styled.div`
display: flex;
`

export const Icons = styled.img`
margin-right: 40px;
max-height: 32px;
max-width: 32px;
`