import React from 'react'
import { Section, SectionText, SectionTitle } from '../GlobalStyles'
import PricingCards from '../PricingCards'

const Pricing = () => {
  return (
    <Section>
      <SectionTitle main>
        Pricing
      </SectionTitle>
      <SectionText>
        Existing data warehouses and data lakes do not fit unstructured datasets like text, images, and videos. AI teams face challenges that require new technologies. We build these technologies.
      </SectionText>
      <PricingCards />
    </Section>
  )
}

export default Pricing