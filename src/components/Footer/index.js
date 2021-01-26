import React from 'react'
import { FooterWrapper, LinkColumn, LinkTitle, LinkItem, LinkList, SocialIconsContainer, CompanyContainer, SocialContainer, SocialContainerIcon, CompanyLogo, Slogan } from "./Footer"
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
];

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Company</LinkTitle>
          <LinkItem to="/about">About us</LinkItem>
          <LinkItem to="/pricing">Pricing</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Legal</LinkTitle>
          <LinkItem to="/">Prvacy policy</LinkItem>
          <LinkItem to="/">Terms of use</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Our Products</LinkTitle>
          <LinkItem to="/">DVC</LinkItem>
          <LinkItem to="/">CML</LinkItem>
          <LinkItem to="/">Studio</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Link to="/">
            <CompanyLogo src={Logo} />
          </Link>
          <Slogan>Open platform to operationalize AI</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <a href="google.com" target="_blank" rel="noreferrer"> <SocialContainerIcon src={Github} /></a>
          <a href="google.com" target="_blank" rel="noreferrer"> <SocialContainerIcon src={Twitter} /></a>
          <a href="google.com" target="_blank" rel="noreferrer"> <SocialContainerIcon src={LinkedIn} /></a>
          <a href="google.com" target="_blank" rel="noreferrer"> <SocialContainerIcon src={Youtube} /></a>
          <a href="google.com" target="_blank" rel="noreferrer"> <SocialContainerIcon src={Discord} /></a>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
