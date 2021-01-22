import React from 'react';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import FooterList from '../FooterList/FooterList';
import githubIcon from '../../images/icn-github.svg';
import twitterIcon from '../../images/icn-twitter.svg';
import linkedInIcon from '../../images/icn-linkedin-in.svg';
import youtubeIcon from '../../images/icn-youtube.svg';
import discordIcon from '../../images/icn-discord.svg';
import './Footer.css';

export default function Footer() {
  const footerLinkListsData = [
    {
      title: 'Company',
      links: [
        { url: '/about/', isLocal: true, text: 'About us' },
        { url: '/pricing/', isLocal: true, text: 'Pricing' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { url: '/', isLocal: true, text: 'Privacy Policy' },
        { url: '/', isLocal: true, text: 'Terms of use' },
      ],
    },
    {
      title: 'Our Products',
      links: [
        { url: 'about:blank', text: 'DVC' },
        { url: 'about:blank', text: 'CML' },
        { url: 'about:blank', text: 'Studio' },
      ],
    },
  ];
  return (
    <footer className="footer">
      <ul className="footer__list footer__link-lists">
        {footerLinkListsData.map((data, i) => (
          <FooterList key={i} {...data} />
        ))}
      </ul>
      <div className="footer__company">
        <Logo link="/" linkDescription="Go to home page" />
        <p className="footer__company-text">
          Open platform to operationalize AI
        </p>
      </div>
      <ul className="footer__list footer__social-links-list">
        <li className="footer__social-link-list-item">
          <Icon
            link="about:blank"
            linkDescription="Go to Github"
            icon={githubIcon}
            widthPixelSizes={[16, 24, 24]}
          />
        </li>
        <li className="footer__social-link-list-item">
          <Icon
            link="about:blank"
            linkDescription="Go to Twitter"
            icon={twitterIcon}
            widthPixelSizes={[16, 24, 24]}
          />
        </li>
        <li className="footer__social-link-list-item">
          <Icon
            link="about:blank"
            linkDescription="Go to LinkedIn"
            icon={linkedInIcon}
            widthPixelSizes={[16, 24, 24]}
          />
        </li>
        <li className="footer__social-link-list-item">
          <Icon
            link="about:blank"
            linkDescription="Go to YouTube"
            icon={youtubeIcon}
            widthPixelSizes={[16, 24, 24]}
          />
        </li>
        <li className="footer__social-link-list-item">
          <Icon
            link="about:blank"
            linkDescription="Go to Discord"
            icon={discordIcon}
            widthPixelSizes={[16, 24, 24]}
          />
        </li>
      </ul>
    </footer>
  );
}
