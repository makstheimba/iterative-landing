import React from 'react'
import { Section, SectionDivider, SectionTitle, SectionText } from '../GlobalStyles'
import { TeamSubtext, TeamMap, MemberBubble, MemberContainer, PopupContainer, TeamPopup, IntroContainer, IntroText, IntroName, IntroTitle, IntroLocation, IntroDivider, IntroAvatar, PopupPic, IntroDescription, PopupLinks, PopupLink, PopupIcon } from './TheTeam'
import teamData from '../../data/TeamData.json'
import locationIcon from '../../images/Team/team_pin.svg'
import webIcon from '../../images/Team/team_icn-globe.svg'
import twitterIcon from '../../images/Team/team_icn-twitter.svg'
import linkedinIcon from '../../images/Team/team_icn-linkedin.svg'

const TheTeam = () => {
  const [popupOpen, setPopupOpen] = React.useState(false);

  function handlePopupOpen(devData) {
    setPopupOpen(true);
  }

  function handlePopupClose(devData) {
    setPopupOpen(false);
  }

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
            return (<MemberBubble img={data.pic} x={data.coordinates.x} y={data.coordinates.y} onClick={handlePopupOpen}></MemberBubble>);
          })}
        </MemberContainer>
        <PopupContainer open={popupOpen} onClick={handlePopupClose}>
          <TeamPopup open={popupOpen} onClick={(evt) => {evt.stopPropagation()}}>
            <IntroContainer>
              <IntroText>
                <IntroName>Fabio Santos</IntroName>
                <IntroTitle>Software engineer, Terser (new uglify-es) maintainer</IntroTitle>
                <IntroLocation><PopupIcon loc src={locationIcon} />Lisbon, Portugal</IntroLocation>
                <IntroDivider />
              </IntroText>
              <IntroAvatar>
                <PopupPic />
              </IntroAvatar>
            </IntroContainer>
            <IntroDescription>I’m a passionate software engineer and architect, specialising in node.js, React and distributed systems.</IntroDescription>
            <PopupLinks>
              <PopupLink target="_blank" rel="noreferrer">
                <PopupIcon src={webIcon} />
              </PopupLink>
              <PopupLink target="_blank" rel="noreferrer">
                <PopupIcon src={twitterIcon} />
              </PopupLink>
              <PopupLink target="_blank" rel="noreferrer">
                <PopupIcon src={linkedinIcon} />
              </PopupLink>
            </PopupLinks>
          </TeamPopup>
        </PopupContainer>
      </TeamMap>
      <Section>
        <SectionDivider />
      </Section>
    </>
  )
}

export default TheTeam
