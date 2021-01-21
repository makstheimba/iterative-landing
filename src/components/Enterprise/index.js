import React from 'react'
import mainImageL from '../../images/Enterprise/main-l.png'
import mainImageS from '../../images/Enterprise/main-s.png'
import gearImage from '../../images/Enterprise/icon/gear.svg'
import codeImage from '../../images/Enterprise/icon/code.svg'
import shieldImage from '../../images/Enterprise/icon/shield.svg'
import { Section, SectionDivider, SectionTitle, SectionText } from '../GlobalStyles'
import {
  ImageContainer, MainImage, List,
  ListContainer, ListTitle, ListParagraph,
  ListItem, ListIcon
} from '../Enterprise/Enterprise'

const Enterprise = () => {
  return (
    <Section>
      <SectionTitle>Enterprise</SectionTitle>
      <SectionText>
        AI hand in hand with software development.
        Built with data scientists, ML engineers, and data engineers in mind.
      </SectionText>
      <ImageContainer>
        <picture>
          <source media="(min-width:600px)" srcset={mainImageL} />
          <source media="(min-width:300px)" srcset={mainImageS} />
          <MainImage src={mainImageL} alt="enterprise" />
        </picture>
      </ImageContainer>
      <List>
        <ListItem>
          <picture>
            <ListIcon src={gearImage} alt="gear" />
          </picture>
          <ListContainer>
            <ListTitle>Familiar</ListTitle>
            <ListParagraph>
              Don’t reinvent the wheel!
              Fast and cost-efficient path to production
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <ListIcon src={codeImage} alt="code-brackets" />
          </picture>
          <ListContainer>
            <ListTitle>Open source</ListTitle>
            <ListParagraph>
              Lightweight. Open-source. <br />No-strings attached.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <ListIcon src={shieldImage} alt="shield" />
          </picture>
          <ListContainer>
            <ListTitle>Secure</ListTitle>
            <ListParagraph>
              Your data is always stored by you.
              Your models are trained on your machines
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List >
      <SectionDivider colorAlt="true"/>
    </Section>
  )
}

export default Enterprise
