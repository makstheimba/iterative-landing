import styled from 'styled-components'

export const HeroBG = styled.img`
  position: absolute;
  left: 500px;
  top: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 450px;
    height: 450px;
    left: 500px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 300px;
    height: 300px;
    left: 65vw;
  }
`

export const HeroSponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 24px;
    flex-wrap: wrap;
  }
`

export const HeroSponsorLogo = styled.img`
  width: 1fr;
  height: 80px; 

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 50px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 32px;
    flex-basis: 33%;
    margin-bottom: 8px;
  }
`
