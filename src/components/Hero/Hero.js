import styled from 'styled-components'

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding: 0 5rem 5rem;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
`
export const HeroBG = styled.img`
  position: absolute;
  right: -20px;
  top: 0;
`

export const SectionHeader = styled.h2`
  padding: 80px 0 32px;
  font-size: 72px;
  font-weight: 800;
  max-width: 700px;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  padding: 0 0 32px;
  color: rgba(255, 255, 255, 0.5);
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
`

export const HeroSponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 80px;
`  

export const HeroSponsor = styled.div`
  width: 1fr;
`

export const HeroSponsorLogo = styled.img`
  width: 1fr;
`

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
`
