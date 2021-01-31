import React from 'react'
import { Section, SectionDivider, SectionTitle, SectionText, SectionSubText } from '../GlobalStyles'
import { TeamMap, MemberBubble, MemberContainer, PopupContainer, TeamPopup, IntroContainer, IntroText, IntroName, IntroTitle, IntroLocation, IntroDivider, IntroAvatar, PopupPic, PopupPicFrame, PopupPicAccent, IntroDescription, PopupLinks, PopupLink, PopupIcon, TeamStats, StatColumn, StatNum, StatText } from './TheTeam'

import teamData from '../../data/TeamData.json'
import locationIcon from '../../images/Team/team_pin.svg'
import webIcon from '../../images/Team/team_icn-globe.svg'
import twitterIcon from '../../images/Team/team_icn-twitter.svg'
import linkedinIcon from '../../images/Team/team_icn-linkedin.svg'
import picAccent from '../../images/Team/team_profile_accent.svg'

const TheTeam = () => {
  const MOBILE_WIDTH = 550;
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [activeDev, setActiveDev] = React.useState(teamData[0]);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      if (width <= MOBILE_WIDTH) {
        handlePopupClose();
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  function handlePopupOpen(devData) {
    if (width <= MOBILE_WIDTH) {
      return;
    }
    setActiveDev(devData);
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
        <SectionSubText>Building contextual assistants & chatbots that really help customers is hard. Rasa provides infrastructure & tools necessary for high-performing, resilient, proprietary contextual assistants that work. With Iterative, all developers can create better text- and voice-based assistants.</SectionSubText>
      </Section>
      <TeamMap>
        <MemberContainer>
          {teamData.map((data) => {
            return (<MemberBubble img={data.pic} x={data.coordinates.x} y={data.coordinates.y} onClick={() => handlePopupOpen(data)}></MemberBubble>);
          })}
        </MemberContainer>

        <PopupContainer open={popupOpen} onClick={handlePopupClose}>
          <TeamPopup open={popupOpen} onClick={(evt) => { evt.stopPropagation() }}>
            <IntroContainer>
              <IntroText>
                <IntroName>{activeDev.name}</IntroName>
                <IntroTitle>{activeDev.title}</IntroTitle>
                <IntroLocation><PopupIcon loc src={locationIcon} />{activeDev.location}</IntroLocation>
                <IntroDivider />
              </IntroText>
              <IntroAvatar>
                <PopupPicAccent src={picAccent}/> 
                <PopupPicFrame>
                  <PopupPic src={activeDev.pic} />
                </PopupPicFrame>
              </IntroAvatar>
            </IntroContainer>
            <IntroDescription>{activeDev.description}</IntroDescription>
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
        {width <= MOBILE_WIDTH && (
          <TeamStats>
          <StatColumn>
            <StatNum>19</StatNum>
            <StatText>teammates</StatText>
          </StatColumn>
          <StatColumn>
            <StatNum>12</StatNum>
            <StatText>countries</StatText>
          </StatColumn>
          <StatColumn>
            <StatNum>4</StatNum>
            <StatText>time zones</StatText>
          </StatColumn>
        </TeamStats>
        )}
        <SectionDivider />
      </Section>
    </>
  )
}

export default TheTeam
