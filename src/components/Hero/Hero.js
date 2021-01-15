import styled from 'styled-components'

export const HeroWrapper = styled.div`
  display: flex;
  font-family: Tahoma;
  flex-direction: column;
  width: 100%;
  padding: 0 5rem 5rem;
  max-width: 1040px;
`

export const SectionHeader = styled.h2`
  padding: 5rem 0 2rem;
  font-size: 4.5rem;
  font-weight: 800;
  max-width: 600px;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 1.5rem;
  line-height: 2.5rem;
  padding: 0 0 2rem;
`

export const HeroButton = styled.button`
  width: 262px;
  height: 64px;
  border-radius: 50px;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 5rem;
  color: #fff;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);

`

export const HeroSponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`  

export const HeroSponsor = styled.div`
  width: 1fr;
`

export const HeroSponsorLogo = styled.img`
  width: 1fr;

`

