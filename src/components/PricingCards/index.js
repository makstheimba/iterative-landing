import React from 'react'
import { Section } from '../GlobalStyles'
import { CardButton, CardList, CardLogo, Cards, CardsSubTitle, CardsText, CardsTitle, CardsLogosContainer, CardLogoText, CardsLogoLink, CardsLogoDivider } from "./PricingCards"

import Infinity from "../../images/iterative-icon_cml.svg"
import DVC from "../../images/Group297.svg"
import Studio from "../../images/iterative-icon_viewer.svg"

const PricingCards = () => {
  return (
    <CardList>

      <Cards>
      
        <CardsTitle>Open-source</CardsTitle>
        <CardsSubTitle>Individuals and teams</CardsSubTitle>

        <CardsText>
          DVC, CML, our other open-source tools come for free, no strings attached
       </CardsText>


        <CardsLogosContainer>
          <CardsLogoLink border>
            <CardLogo src={Infinity} alt="infinity logo" />
            <CardLogoText right> Go to CML</CardLogoText>
          </CardsLogoLink>


          <CardsLogoLink>
            <CardLogo src={DVC} alt="infinity logo" />
            <CardLogoText> Go to DVC</CardLogoText>
          </CardsLogoLink>

        </CardsLogosContainer>

      </Cards>

     
 

      <Cards bottom>
        <CardsTitle>SaaS</CardsTitle>
        <CardsSubTitle>Visualisation and team collaboration </CardsSubTitle>

        <CardsText>
          Studio is an extension of GitHub, GitLab or BitBucket. Sign up for the online SaaS version or contact us to get on-premise installation
       </CardsText>

        <CardsLogosContainer enterprise>
          <CardsLogoLink>
            <CardLogo src={Studio} alt="infinity logo" />
            <CardLogoText> Go to Studio</CardLogoText>
          </CardsLogoLink>
        </CardsLogosContainer>



      </Cards>


      <Cards>
        <CardsTitle>Enterprise</CardsTitle>
        <CardsSubTitle>Cross-org collaboration</CardsSubTitle>

        <CardsText>
          Extend your unstructured data storages with data compliance, data access control and SSO capabilities. Online as well as on-premise installation are available
       </CardsText>

        <CardButton>
          Contact us
       </CardButton>
      </Cards>




    </CardList>

  )
}

export default PricingCards
