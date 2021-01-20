import styled from "styled-components"

export const CommunitySection = styled.section`
width: calc(100vw - 96px);
max-width: 1040px;
padding: top 48px bottom;
margin: 0 auto;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 768px;
      margin: 0 auto;
  } 

  @media ${props => props.theme.breakpoints.sm} {
    min-width: 320px;
    margin: 0 auto;
  }
`

export const ContainerCommunity = styled.div`
border-top: ${props => props.line ? "1px solid rgba(255, 255, 255, 0.1);" : ""};
max-width:1040px;
@media ${props => props.theme.breakpoints.md} {
  max-width: 100%;
  margin: 0 auto;
}
@media ${props => props.theme.breakpoints.sm} {
  max-width: 288px;
  margin: 0 auto;
} 
`


export const SectionTitle = styled.h2`
font-style: normal;
font-weight: 800;
font-size: 56px;
line-height: 56px;
color: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
margin-bottom:40px;

@media ${props => props.theme.breakpoints.md} {
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 48px;
  margin-bottom:32px;
}

@media ${props => props.theme.breakpoints.sm} {
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 24px;
} 
`



export const Boxes = styled.div`
max-width: 1040px;
display: flex;
gap: 24px;
margin-bottom: 40px;
@media ${props => props.theme.breakpoints.md}{
  max-width: 672px;
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
}

@media ${props => props.theme.breakpoints.sm}{
  max-width: 288px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
  gap: 10px;
  margin-bottom: 24px;
}
`


export const Box = styled.div`
background: #212D45;
border-radius: 12px;
width: 242px;
height: 144px;
padding: 24px;
@media ${props => props.theme.breakpoints.md} {
  width: 156px;
  height: 112px;
  padding: 16px;
  &:first-child{
    height: 112px;
};
 &:nth-child(2){
   grid-row:2;
 }
}
@media ${props => props.theme.breakpoints.sm} {
  width: 138px;
  height: 82px;
  padding: 12px;
  &:first-child{
  height: 82px;
};
 &:nth-child(2){
   grid-row:2;
 }
}

`
export const BoxNum = styled.h5`
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 40px;
letter-spacing: 0.01em;
color: #FFFFFF;
margin-bottom: 8px;
@media ${props => props.theme.breakpoints.md} {
  font-size: 28px;
  line-height: 32px;
}
@media ${props => props.theme.breakpoints.sm} {
  font-size: 24px;
  line-height: 26px;
}


`



export const BoxText = styled.p`
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 24px;
letter-spacing: 0.02em;
color: rgba(255, 255, 255, 0.75);

@media ${props => props.theme.breakpoints.md}{
font-size: 16px;
line-height: 20px;
};

@media ${props => props.theme.breakpoints.sm} {
font-size: 10px;
line-height: 14px;
}

`

export const Join = styled.div`

display: flex;
max-width: 1040px;
justify-content: center;
margin-bottom: 80px;


@media ${props => props.theme.breakpoints.md}{
  max-width: 672px;
  display: flex;
  /* width: 672px; */
  justify-content: center;
  margin-bottom: 64px;
}
@media ${props => props.theme.breakpoints.sm}{
  max-width: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
}

`




export const JoinText = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);
  margin-right: 44px;

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
  margin-right: 35px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  margin-bottom: 16px;
}

`


export const IconContainer = styled.div`
@media ${props => props.theme.breakpoints.sm}{
  width: 160px;
  display: flex;
  justify-content: space-between;
}

`

export const Icons = styled.img`
&:nth-child(2){
   margin: 0 40px;
  }
@media ${props => props.theme.breakpoints.md}{
  &:nth-child(2){
   margin: 0 32px;
  }
}
@media ${props => props.theme.breakpoints.sm}{
  width: 32px;
  height: 32px;
}
`