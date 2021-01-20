import React from 'react'
import { CommunitySection, ContainerCommunity } from '../MeetCommunity/MeetCommunity'
import { LinkContainer, LinkName, LinkListName, LinkList, SocialIconsContainer, CompanyContainer, SocialContainer, SocialContainerIcon, CompanyLogo, Slogan } from "./FooterLinks"

import Logo from "../../images/Brand.svg"
import Discord from "../../images/icn-discord.svg"
import Github from "../../images/icn-github.svg"
import Twitter from "../../images/icn-twitter.svg"
import LinkedIn from '../../images/icn-linkedin-in.svg'
import Youtube from "../../images/icn-youtube.svg"
import { Link } from 'gatsby'


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
            <Link to="/">
              <CompanyLogo src={Logo} />
            </Link>
            <Slogan>Open platform to operationalize AI</Slogan>
          </CompanyContainer>

          <SocialContainer>
            <a href="google.com">  <SocialContainerIcon src={Github} /></a>
            <a href="google.com">  <SocialContainerIcon src={Twitter} /> </a>
            <a href="google.com">  <SocialContainerIcon src={LinkedIn} /></a>
            <a href="google.com">  <SocialContainerIcon src={Youtube} /></a>
            <a href="google.com">  <SocialContainerIcon src={Discord} /></a>
          </SocialContainer>

        </SocialIconsContainer>
      </ContainerCommunity>
    </CommunitySection>
  )
}

export default FooterLinks
