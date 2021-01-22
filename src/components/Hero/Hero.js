import styled from 'styled-components'

export const HeroBG = styled.img`
  position: absolute;
  left: 500px;
  top: 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 450px;
    height: 450px;
    left: 500px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 300px;
    height: 300px;
    left: 65vw;
  }
`

export const HeroButton = styled.button`
  width: 262px;
  height: 64px;
  border-radius: 50px;
  border: none;
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 80px;
  color: #fff;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  background-size: 100% 100%;
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  left: 0;

  &:focus {
    outline: none;
  }

  &:hover {
    background-size: 500% 100%;
    left: 8px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 184px;
    height: 48px;
    font-size: 16px;
    margin-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: 32px;
  }
`

export const HeroSponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 80px;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
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
