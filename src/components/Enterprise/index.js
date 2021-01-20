import React from 'react'
import mainImageL from '../../images/Enterprise/main-l.png'
import mainImageM from '../../images/Enterprise/main-m.png'
import mainImageS from '../../images/Enterprise/main-s.png'

import gearImage from '../../images/Enterprise/icon/gear.svg'
import gearImageS from '../../images/Enterprise/icon/gear-s.svg'
import codeImage from '../../images/Enterprise/icon/code.svg'
import codeImageS from '../../images/Enterprise/icon/code-s.svg'
import shieldImage from '../../images/Enterprise/icon/shield.svg'
import shieldImageS from '../../images/Enterprise/icon/shield-s.svg'


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
          <source media="(min-width:1200px)" srcset={mainImageL}/>
          <source media="(min-width:768px)" srcset={mainImageM}/>
          <source media="(min-width:414px)" srcset={mainImageS}/>
          <MainImage src={mainImageL} alt="enterprise"/>
        </picture>
      </ImageContainer>
      <List>
        <ListItem>
        <picture>
          <source media="(min-width:768px)" srcset={gearImage}/>
          <source media="(min-width:414px)" srcset={gearImageS}/>
          <ListIcon src={gearImageS} alt="gear"/>
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
          <source media="(min-width:768px)" srcset={codeImage}/>
          <source media="(min-width:414px)" srcset={codeImageS}/>
          <ListIcon src={codeImageS} alt="code-brackets"/>
        </picture>
          <ListContainer>
            <ListTitle>Open source</ListTitle>
            <ListParagraph>
              Lightweight. Open-source. No-strings attached. 
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
        <picture>
          <source media="(min-width:768px)" srcset={shieldImage}/>
          <source media="(min-width:${})" srcset={shieldImageS}/>
          <ListIcon src={shieldImageS} alt="shield"/>
        </picture>
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
