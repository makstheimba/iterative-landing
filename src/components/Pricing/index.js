import React from 'react'
import { Section, SectionText, SectionTitle } from '../GlobalStyles'
import { CardList, CardLogo, Cards, CardsSubTitle, CardsText, CardsTitle, CardLogoText, CardsLogoLink, BtnContainer } from "./Pricing"
import Button from '../GlobalStyles/Button'

import CML from "../../images/iterative-icon_cml.svg"
import DVC from "../../images/Group297.svg"
import Studio from "../../images/iterative-icon_viewer.svg"

const Pricing = () => {
  return (
    <Section>
      <SectionTitle main>
        Pricing
      </SectionTitle>
      <SectionText>
        Existing data warehouses and data lakes do not fit unstructured datasets like text, images, and videos. AI teams face challenges that require new technologies. We build these technologies.
      </SectionText>

      <CardList>
        <Cards>
          <CardsTitle>Open-source</CardsTitle>
          <CardsSubTitle>Individuals and teams</CardsSubTitle>
          <CardsText>DVC, CML, our other open-source tools come for free, no strings attached</CardsText>
          <CardsLogoLink border>
            <CardLogo src={CML} alt="CML logo" />
            <CardLogoText right> Go to CML</CardLogoText>
          </CardsLogoLink>
          <CardsLogoLink>
            <CardLogo src={DVC} alt="DVC logo" />
            <CardLogoText> Go to DVC</CardLogoText>
          </CardsLogoLink>
        </Cards>
        <Cards bottom>
          <CardsTitle>SaaS</CardsTitle>
          <CardsSubTitle>Visualisation and team collaboration </CardsSubTitle>
          <CardsText>
            Studio is an extension of GitHub, GitLab or BitBucket. Sign up for the online SaaS version or contact us to get on-premise installation
          </CardsText>
          <CardsLogoLink>
            <CardLogo src={Studio} alt="Studio logo" />
            <CardLogoText> Go to Studio</CardLogoText>
          </CardsLogoLink>
        </Cards>
        <Cards>
          <CardsTitle>Enterprise</CardsTitle>
          <CardsSubTitle>Cross-org collaboration</CardsSubTitle>
          <CardsText>
            Extend your unstructured data storages with data compliance, data access control and SSO capabilities. Online as well as on-premise installation are available
          </CardsText>
          
          <Button alt>Contact us</Button>


          {/* <CardButton>Contact us</CardButton> */}
        </Cards>
      </CardList>
    </Section>
  )
}

export default Pricing