import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 40px 0;

  @media ${props => props.theme.breakpoints.lg}{
    gap: 16px;
    margin: 32px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;

  @media ${props => props.theme.breakpoints.lg} {
    height: 112px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.md} {
    height: 82px;
    padding: 12px;
    
    &:nth-child(2n){
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

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.md} {
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

  @media ${props => props.theme.breakpoints.lg}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.md} {
    font-size: 10px;
    line-height: 14px;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.lg}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
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

@media ${props => props.theme.breakpoints.lg}{
  line-height: 32px;
  font-size: 20px;
  margin-right: 35px;
};

@media ${props => props.theme.breakpoints.md}{
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
