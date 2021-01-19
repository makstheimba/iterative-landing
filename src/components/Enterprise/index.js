import React from 'react'
import mainImageL from '../../images/Enterprise/main-l.png'
import mainImageM from '../../images/Enterprise/main-m.png'
import mainImageS from '../../images/Enterprise/main-s.png'
import { Section, Accent, Title, Subtitle,
  ImageContainer, MainImage, List,
  ListContainer, ListTitle, ListParagraph,
  ListItem, ListIcon } from '../Enterprise/Enterprise'

const Enterprise = () => {
  return (
    <Section>
      <Accent />
      <Title>Enterprise</Title>
      <Subtitle>
        AI hand in hand with software development. 
        Built with data scientists, ML engineers, and data engineers in mind.
      </Subtitle>
      <ImageContainer>
        <picture>
          <source media="(min-width:1076px)" srcset={mainImageL}/>
          <source media="(min-width:768px)" srcset={mainImageM}/>
          <source media="(min-width:414px)" srcset={mainImageS}/>
          <MainImage src={mainImageS} alt="enterprise"/>
        </picture>
      </ImageContainer>
      <List>
        <ListItem>
          <ListIcon gear></ListIcon>
          <ListContainer>
            <ListTitle>Familiar</ListTitle>
            <ListParagraph>
              Don’t reinvent the wheel! 
              Fast and cost-efficient path to production 
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListIcon code></ListIcon>
          <ListContainer>
            <ListTitle>Open source</ListTitle>
            <ListParagraph>
              Lightweight. Open-source. No-strings attached. 
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListIcon shield></ListIcon>
          <ListContainer>
            <ListTitle>Secure</ListTitle>
            <ListParagraph>
              You data is always stored by you. 
              Your models are trained on your machines
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List >
    </Section>
  )
}

export default Enterprise
