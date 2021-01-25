import styled from 'styled-components'

export const LeadershipList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
  column-gap: 32px;
  margin-top: 80px;
  margin-bottom: 124px;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fit, minmax(104px, 1fr));
    margin-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin-bottom: 46px;
  }
`

export const LeadershipItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;


  @media ${props => props.theme.breakpoints.sm} {
      flex-direction: row;
      align-items: center;
  }
`

export const LeadershipImageContainer = styled.div`
  position: relative;
  width: 136px;
  height: 136px;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    width: 104px;
    height: 104px;
    margin-bottom: 4px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    min-width: 88px;
    min-height: 88px;
    margin-bottom: 0px;
    margin-right: 16px;
  }
`
export const LeadershipImage = styled.img`
  width: 128px;
  height: 128px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;

  @media ${props => props.theme.breakpoints.md} {
    width: 96px;
    height: 96px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 80px;
    height: 80px;
  }
`

export const LeadershipImageBorder = styled.img`
  width: 128px;
  height: 128px;  
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 0;

  @media ${props => props.theme.breakpoints.md} {
    width: 96px;
    height: 96px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 80px;
    height: 80px;
  }
`

export const LeadershipTextContainer = styled.div`
`

export const LeadershipTitle = styled.h4`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 4px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`
export const LeadershipText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
  }
`