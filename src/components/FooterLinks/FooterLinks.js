import styled from "styled-components"

export const LinkList = styled.ul`
max-width: 735px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
grid-gap: 5px;
margin-top: 40px;
`

export const LinkContainer = styled.div`
`


export const LinkName = styled.h5`
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 24px;
text-transform: uppercase;
color: rgba(255, 255, 255, 0.75);
`

export const LinkListName = styled.p`
font-size: 18px;

color:#ACAFB4;
margin: 10px  0 10px 0;
`

export const SocialIconsContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 78px;
`

export const CompanyContainer = styled.div`
display: flex;
align-items: center;

`

export const CompanyLogo = styled.img`
margin-right: 32px;
`
export const Slogan = styled.p`
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
letter-spacing: 0.02em;
align-content: center;
`


export const SocialContainer = styled.div`
max-width: 336px;
border: 1px solid red;
margin: 0 15px;
display: flex;
    align-items: center;
    align-self: flex-start;

`
export const SocialContainerIcon = styled.img`
margin: 0 36px 0 12px;
width: 24px;
height: 24px;
`