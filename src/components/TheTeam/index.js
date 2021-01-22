import React from 'react'
import { Section, SectionDivider, SectionTitle, SectionText } from '../GlobalStyles'
import { TeamSubtext, TeamMap, MemberBubble, MemberContainer, TeamPopup, IntroContainer, PicWrap, PopupPic } from './TheTeam'
import teamData from '../../data/TeamData.json'

const TheTeam = () => {
  return (
    <>
      <Section>
        <SectionTitle>The team</SectionTitle>
        <SectionText>Built with data scientists, ML engeneers, and data engeneers in mind.</SectionText>
        <TeamSubtext>Building contextual assistants & chatbots that really help customers is hard. Rasa provides infrastructure & tools necessary for high-performing, resilient, proprietary contextual assistants that work. With Iterative, all developers can create better text- and voice-based assistants.</TeamSubtext>
      </Section>
      <TeamMap>
        <MemberContainer>
          {teamData.map((data) => {
            return (<MemberBubble img={data.pic} x={data.coordinates.x} y={data.coordinates.y}></MemberBubble>);
          })}
        </MemberContainer>
        
        <TeamPopup>
          <IntroContainer>

          </IntroContainer>
          <PicWrap>
            <PopupPic />
          </PicWrap>
        </TeamPopup>

      </TeamMap>
      <Section>
        <SectionDivider />
      </Section>
    </>
  )
}

export default TheTeam
