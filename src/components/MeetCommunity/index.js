import React from 'react'
import { Box, Boxes, BoxNum, BoxText, CommunitySection, IconContainer, Icons, Join, JoinText, SectionTitle } from './MeetCommunity'
import Discord from "../../images/icn-discord.svg"
import Github from "../../images/icn-github.svg"
import Twitter from "../../images/icn-twitter.svg"


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
    <CommunitySection>
      <SectionTitle>
        Meet our community
       </SectionTitle>

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
          <Icons src={Discord} />
          <Icons src={Github} />
          <Icons src={Twitter} />
        </IconContainer>
      </Join>
      
    </CommunitySection>
  )
}

export default MeetCommunity
