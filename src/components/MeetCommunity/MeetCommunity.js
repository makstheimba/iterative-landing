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
font-size: 3.5rem;
line-height: 56px;
font-weight: 700;
color: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
margin-bottom: 40px;

`

export const Boxes = styled.ul`
list-style: none;
display: flex;
max-width: 1040px;
justify-content: space-between;

`
export const Box = styled.li`
width: 242px;

padding: 24px;
background: #212D45;
border-radius: 12px;

`
export const BoxNum = styled.h5`
font-size: 2.25rem;
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
margin-bottom: 80px
`
export const JoinText = styled.h5`
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 40px;
letter-spacing: 0.02em;
margin-right: 44px;
`
export const IconContainer = styled.div`
display: flex;
`

export const Icons = styled.div`
margin-right: 40px;
`