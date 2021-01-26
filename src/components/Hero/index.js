import React from 'react'
import { HeroBG, HeroButton, HeroSponsorsContainer, HeroSponsorLogo } from './Hero'
import { Section, SectionDivider, SectionTitle, SectionText } from '../GlobalStyles'
import hero0 from '../../images/hero_bg.svg'
import hero1 from '../../images/hero_Standard.svg'
import hero2 from '../../images/hero_Rubrik.svg'
import hero3 from '../../images/hero_Warby-Parker.svg'
import hero4 from '../../images/hero_Odnoklassniki.svg'
import hero5 from '../../images/hero_Smithsonian.svg'
import hero6 from '../../images/hero_Neosensory.svg'

const Hero = () => {
  return (
    <Section>
      <HeroBG src={hero0} />
      <SectionTitle main>Open platform <br />to operationalize AI</SectionTitle>
      <SectionText>
        AI teams face challenges that require new technologies. We build these technologies. Existing data warehouses and data lakes do not fit unstructured datasets like text, images, and videos.
      </SectionText>
      <HeroButton>Request a Demo</HeroButton>
      <HeroSponsorsContainer>
        <HeroSponsorLogo src={hero1} />
        <HeroSponsorLogo src={hero2} />
        <HeroSponsorLogo src={hero3} />
        <HeroSponsorLogo src={hero4} />
        <HeroSponsorLogo src={hero5} />
        <HeroSponsorLogo src={hero6} />
      </HeroSponsorsContainer>
      <SectionDivider />
    </Section>
  )
}

export default Hero