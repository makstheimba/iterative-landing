import React from 'react'
import { Box, Boxes, BoxNum, BoxText, CommunitySection, ContainerCommunity, IconContainer, Icons, Join, JoinText, SectionTitle } from './MeetCommunity'


const data = [
  {
    number: 200,
    text: "Open Source",
    text2: "Contributors "
  },
  {
    number: 100,
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
      <ContainerCommunity>
        {/* accent needs to go here */}
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
          <JoinText>Join the Community: </JoinText>
          <IconContainer>
            <Icons>Icon</Icons>
            <Icons>Icon</Icons>
            <Icons>Icon</Icons>
          </IconContainer>
        </Join>


      </ContainerCommunity>
    </CommunitySection>
  )
}

export default MeetCommunity
