import React from 'react'
import { Section, SectionText, SectionTitle } from '../GlobalStyles'
import { CardList, CardLogo, Cards, CardsSubTitle, CardsText, CardsTitle, CardLogoText, CardsLogoLink, CardsLogoSeparator, CardsLogosLateral } from "./Pricing"
import Button from '../GlobalStyles/Button'

import CML from "../../images/cml.svg"
import DVC from "../../images/dvc.svg"
import Studio from "../../images/viewer.svg"

const Pricing = (props) => {
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
          <CardsLogosLateral>
            <CardsLogoLink>
              <CardLogo src={CML} alt="CML logo" />
              <CardLogoText> Go to CML</CardLogoText>
            </CardsLogoLink>
            <CardsLogoSeparator />
            <CardsLogoLink>
              <CardLogo src={DVC} alt="DVC logo" />
              <CardLogoText> Go to DVC</CardLogoText>
            </CardsLogoLink>
          </CardsLogosLateral>
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
          <Button alt onClick={props.handleClick}>Contact us</Button>
        </Cards>
      </CardList>
    </Section>
  )
}

export default Pricing
