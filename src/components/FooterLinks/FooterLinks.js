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
font-size: 14px;
margin: 7px 0;
color:#ACAFB4
`

export const SocialIconsContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const CompanyContainer = styled.div`
display: flex

`

export const SocialContainer = styled.div`
display: flex

`
export const SocialContainerIcon = styled.p`
margin: 0 10px;
`