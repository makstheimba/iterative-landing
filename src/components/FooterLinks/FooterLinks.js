import styled from "styled-components"

export const LinkList = styled.ul`
max-width: 735px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
grid-gap: 5px;
margin-top: 40px;
@media ${props => props.theme.breakpoints.sm} {
    margin-top: 32px;
    grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));

}
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
@media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
}
`

export const LinkListName = styled.p`
font-size: 18px;

color:#ACAFB4;
margin: 10px  0 25px 0;
@media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    font-size: 10px;
    line-height: 12px;
}
`

export const SocialIconsContainer = styled.div`
display: flex;
justify-content: space-between;
@media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    margin-top: 32px;
}

`

export const CompanyContainer = styled.div`
display: flex;
align-items: center;
@media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
}


`

export const CompanyLogo = styled.img`
margin-right: 32px;
@media ${props => props.theme.breakpoints.sm} {
    width: 114.26px;
    height: 24px;
}
`
export const Slogan = styled.p`
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
letter-spacing: 0.02em;
align-content: center;
@media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
}

`


export const SocialContainer = styled.div`
max-width: 336px;
border: 1px solid red;
margin: 0 15px;
display: flex;
    align-items: center;
    align-self: flex-start;
    @media ${props => props.theme.breakpoints.sm} {
        margin-top: 24px;
        width: 224px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        align-self: center;

    }

`
export const SocialContainerIcon = styled.img`
margin: 0 36px 0 12px;
width: 24px;
height: 24px;
@media ${props => props.theme.breakpoints.sm} {
    margin: 0;
    }
`