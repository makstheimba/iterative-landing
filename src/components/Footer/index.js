import React from 'react'
import { FooterWrapper, LinkColumn, LinkTitle, LinkItem, LinkList, SocialIconsContainer, CompanyContainer, SocialContainer, CompanyLogo, Slogan } from "./Footer"
import Logo from "../../images/Brand.svg"
import discord from "../../images/icn-discord.svg"
import github from "../../images/icn-github.svg"
import twitter from "../../images/icn-twitter.svg"
import linkedIn from '../../images/icn-linkedin-in.svg'
import youtube from "../../images/icn-youtube.svg"
import { Link } from 'gatsby'
import LinkIcon from '../GlobalStyles/LinkIcon'

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
          <LinkIcon href="#" src={github}/>
          <LinkIcon href="#" src={twitter}/>
          <LinkIcon href="#" src={linkedIn}/>
          <LinkIcon href="#" src={youtube}/>
          <LinkIcon href="#" src={discord}/>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
