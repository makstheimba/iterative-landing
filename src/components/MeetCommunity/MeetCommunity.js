import styled from "styled-components"

export const CommunitySection = styled.section`
max-width: 1280px;
margin: 0 auto;
`

export const ContainerCommunity = styled.div`
max-width: 1040px;
margin: 0 auto;
flex-direction: column;
border-top: ${props => props.line ? "1px solid rgba(255, 255, 255, 0.1);" : ""};

@media ${props => props.theme.breakpoints.sm} {
  max-width: 288px;
  border: 1px  solid red;
  margin: 0 auto;
}



`
export const SectionTitle = styled.h2`
font-size: 56px;
line-height: 56px;
font-weight: 700;
color: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
margin-bottom: 40px;
@media ${props => props.theme.breakpoints.sm} {
  max-width: 288px;
  font-weight: 800;
  line-height: 40px;
  font-size:32px;
  margin-bottom: 24px;

}

`

export const Boxes = styled.div`
height: 156px;
list-style: none;
display: flex;
max-width: 1040px;
justify-content: space-between;
margin-bottom: 40px;

@media ${props => props.theme.breakpoints.sm} {
  max-width: 288px;
  height: 176px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
  gap: 10px;
  margin-bottom: 24px;
}


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

@media ${props => props.theme.breakpoints.sm} {
  width: 138px;
  height: 82px;
  padding: 8px;
  &:first-child{
  height: 82px;
};
 &:nth-child(2){
   grid-row:2;
 }
}

`
export const BoxNum = styled.h5`
font-size:36px;
font-weight: 600;
line-height: 40px;
letter-spacing: 0.01em;
margin-bottom: 8px;

@media ${props => props.theme.breakpoints.sm} {
  width: 122px;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 26px;
color: #FFFFFF;
}

`

export const BoxText = styled.p`
line-height: 30px;
letter-spacing: 0.02em;
font-size: 1.125rem;
color: rgba(255, 255, 255, 0.75);

@media ${props => props.theme.breakpoints.sm} {
  width: 122px;

  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  margin: 5px 0; 
}


`

export const Join = styled.div`
max-width: 1040px;
display: flex;
margin-bottom: 80px;
justify-content: center;

@media ${props => props.theme.breakpoints.sm} {
  flex-direction: column;
  max-width: 288px;
  margin-bottom: 32px;

}
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
@media ${props => props.theme.breakpoints.sm} {
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 0;
}

`
export const IconContainer = styled.div`
display: flex;
@media ${props => props.theme.breakpoints.sm} {
  margin-top: 16px;
  max-width: 288px;
  max-width: 288px;
justify-content: space-evenly;
}
`

export const Icons = styled.img`
margin-right: 40px;
max-height: 32px;
max-width: 32px;
@media ${props => props.theme.breakpoints.sm} {
  margin: 0

}
`