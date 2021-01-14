import React from 'react'
import { CommunitySection, ContainerCommunity } from '../MeetCommunity/MeetCommunity'
import { LinkContainer, LinkName, LinkListName, LinkList, SocialIconsContainer, CompanyContainer, SocialContainer, SocialContainerIcon } from "./FooterLinks"

import Logo from "../../images/Brand.svg"

const linkData = [
  {
    name: "Company",
    linkOne: "About Us",
    linkTwo: "Pricing"

  },
  {
    name: "Legal",
    linkOne: "Privacy policy",
    linkTwo: "Terms of use",


  },
  {
    name: "Our products",
    linkOne: "DCV",
    linkTwo: "CML",
    linkThree: "Studio"

  },
]



const FooterLinks = () => {
  return (
    <CommunitySection>
      <ContainerCommunity line>
        <LinkList>
          {linkData.map((data, index) => {
            return (
              <LinkContainer key={index}>
                <LinkName>{data.name}</LinkName>
                <LinkListName>{data.linkOne}</LinkListName>
                <LinkListName>{data.linkTwo}</LinkListName>
                {data.linkThree && <LinkListName>{data.linkThree}</LinkListName>}
              </LinkContainer>
            )
          })}

        </LinkList>
        {/* Maybe need to move to its own components/adding modularity if so. otherwise can stay here */}

        <SocialIconsContainer>
          <CompanyContainer>
            <img src={Logo} />
            <p>Open platform to operationalize AI</p>
          </CompanyContainer>

          <SocialContainer>
            <SocialContainerIcon>icons</SocialContainerIcon>
            <SocialContainerIcon>icons</SocialContainerIcon>
            <SocialContainerIcon>icons</SocialContainerIcon>
            <SocialContainerIcon>icons</SocialContainerIcon>
            <SocialContainerIcon>icons</SocialContainerIcon>

          </SocialContainer>


        </SocialIconsContainer>
      </ContainerCommunity>


    </CommunitySection>
  )
}

export default FooterLinks
