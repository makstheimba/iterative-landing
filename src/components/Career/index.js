import React from 'react'
import { Section, SectionSubText, SectionText, SectionTitle } from '../GlobalStyles'
import { Aboutbutton } from './Career'

const Career = () => {
  return (
    <Section>
      <SectionTitle>
        Career
      </SectionTitle>
      <SectionText>
        Built with data scientists, ML engineers, and data engineers in mind.
      </SectionText>
      <SectionSubText>
        Building contextual assistants & chatbots that really help customers is hard.Rasa provides infrastructure & tools necessary for high-performing, resilient,proprietary contextual assistants that work. With Iterative, all developers can create better text- and voice-based assistants.
      </SectionSubText>
      <Aboutbutton>Drop us a line</Aboutbutton>
    </Section>
  )
}

export default Career
