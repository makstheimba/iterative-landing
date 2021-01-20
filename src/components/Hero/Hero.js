import styled from 'styled-components'

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-content: center;
  justify-content: center;
  width: calc(100vw - 96px);
  padding: 0 48px;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 48px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 16px;
    width: calc(100vw - 32px);
  }
`
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

export const SectionHeader = styled.h2`
  padding: 80px 0 32px;
  font-size: 72px;
  line-height: 72px;
  font-weight: 800;
  max-width: 700px;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 64px 0 24px;
    font-size: 56px;
    line-height: 56px;
    max-width: 600px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 40px 0 16px;
    font-size: 28px;
    line-height: 32px;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding: 0 0 32px;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding: 0 0 24px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 24px;
    padding: 0 0 16px;
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

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 32px;
    height: 2px;
  }
`
