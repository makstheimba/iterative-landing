import React from 'react'
import { Box, Boxes, BoxNum, BoxText, IconContainer, Join, JoinText } from './MeetCommunity'
import discord from "../../images/icn-discord.svg"
import github from "../../images/icn-github.svg"
import twitter from "../../images/icn-twitter.svg"
import { Section, SectionTitle } from '../GlobalStyles'
import LinkIcon from '../GlobalStyles/LinkIcon'

const data = [
  {
    number: 200,
    text: "Open Source",
    text2: "Contributors "
  },
  {
    number: 1000,
    text: "Companies",
  },
  {
    number: 4000,
    text: "Community members",
  },
  {
    number: 9000,
    text: "Github Stars",
  },
]

const MeetCommunity = () => {
  return (
    <Section>
      <SectionTitle>Meet our community</SectionTitle>
      <Boxes>
        {data.map((card, index) => {
          return (
            <Box key={index}>
              <BoxNum>{`${card.number}+`}</BoxNum>
              <BoxText>{card.text}</BoxText>
              {card.text2 && <BoxText>{card.text2}</BoxText>}
            </Box>
          )
        })}
      </Boxes>
      <Join>
        <JoinText>Join the community:</JoinText>
        <IconContainer>
          <LinkIcon large href="#" src={discord}/>
          <LinkIcon large href="#" src={github}/>
          <LinkIcon large href="#" src={twitter}/>
        </IconContainer>
      </Join>
    </Section>
  )
}

export default MeetCommunity
