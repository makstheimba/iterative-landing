import styled from "styled-components"

export const LinkList = styled.ul`
grid-template-columns: repeat(auto-fill, minmax(120px, 218px));
    display: grid;
    justify-content: space-between;
    margin-bottom: 49px;
    margin-top: 40px;

@media ${props => props.theme.breakpoints.md} {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(120px, 197px));
    display: grid;
    justify-content: space-between;
    margin-bottom: 37px;
    margin-top: 31px;
}
@media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    gap: 16px;
    margin-bottom: 36px;
    margin-top: 32px;
}

`

export const LinkContainer = styled.div``



export const LinkName = styled.h5`

font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 24px;
text-transform: uppercase;
color: rgba(255, 255, 255, 0.75);
@media ${props => props.theme.breakpoints.md} {
font-size: 12px;
line-height: 24px;

}
@media ${props => props.theme.breakpoints.sm} {
font-size: 10px;
line-height: 12px;

}

`

export const LinkListName = styled.p`
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 24px;
color: rgba(255, 255, 255, 0.75);

@media ${props => props.theme.breakpoints.md} {
font-size: 12px;
line-height: 24px;
}

@media ${props => props.theme.breakpoints.sm} {
font-size: 10px;
margin-bottom: 8px;

}


`









export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: space-between;

}
@media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
}



`


export const CompanyContainer = styled.div`

    display: flex;
    align-items:center;

@media ${props => props.theme.breakpoints.md}{
    flex-direction: column;
    align-items: baseline;

}

@media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin-bottom:32px;
    align-items: center
}

`







export const CompanyLogo = styled.img`
width: 190.44px;
height: 40px;
margin-right: 32px;
@media ${props => props.theme.breakpoints.md}{
    margin-bottom: 9px;
    width: 152.35px;
height: 32px;
}

@media ${props => props.theme.breakpoints.sm}{
    width: 114.26px;
    height: 24px;
}

`



export const Slogan = styled.p`
color: rgba(255, 255, 255, 0.5);
font-style: normal;
font-weight: normal;
letter-spacing: 0.02em;

font-size: 18px;
line-height: 30px;

@media ${props => props.theme.breakpoints.md}{
font-size: 16px;
line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
line-height: 22px;
font-size: 14px;
}


`











export const SocialContainer = styled.div`

width: 336px;
display: flex;
    align-items: center;
    justify-content: space-between;


@media ${props => props.theme.breakpoints.md}{
    width: 304px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

}
@media ${props => props.theme.breakpoints.sm}{
    width: 224px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}


`






export const SocialContainerIcon = styled.img`
width: 24px;
height: 24px;
@media ${props => props.theme.breakpoints.md}{
    width: 24px;
    height: 24px;
}

@media ${props => props.theme.breakpoints.sm}{
    width: 16px;
    height: 16px;
}

`