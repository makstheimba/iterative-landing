import React from 'react';
import { Link } from 'gatsby';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import githubIcon from '../../images/icn-github.svg';
import twitterIcon from '../../images/icn-twitter.svg';
import linkedInIcon from '../../images/icn-linkedin-in.svg';
import youtubeIcon from '../../images/icn-youtube.svg';
import discordIcon from '../../images/icn-discord.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list footer__link-lists">
        <li className="footer__link-lists-item">
          <h2 className="footer__link-list-title">Company</h2>
          <ul className="footer__list footer__link-list">
            <li className="footer__link-list-item">
              <Link to="/about/" className="footer__link">
                About us
              </Link>
            </li>
            <li className="footer__link-list-item">
              <Link to="/pricing/" className="footer__link">
                Pricing
              </Link>
            </li>
          </ul>
        </li>
        <li className="footer__link-lists-item">
          <h2 className="footer__link-list-title">Legal</h2>
          <ul className="footer__list footer__link-list">
            <li className="footer__link-list-item">
              <a href="/" className="footer__link">
                Privacy Policy
              </a>
            </li>
            <li className="footer__link-list-item">
              <a href="/" className="footer__link">
                Terms of use
              </a>
            </li>
          </ul>
        </li>
        <li className="footer__link-lists-item">
          <h2 className="footer__link-list-title">Our Products</h2>
          <ul className="footer__list footer__link-list">
            <li className="footer__link-list-item">
              <a
                target="_blank"
                rel="noreferrer"
                href="about:blank"
                className="footer__link"
              >
                DVC
              </a>
            </li>
            <li className="footer__link-list-item">
              <a
                target="_blank"
                rel="noreferrer"
                href="about:blank"
                className="footer__link"
              >
                CML
              </a>
            </li>
            <li className="footer__link-list-item">
              <a
                target="_blank"
                rel="noreferrer"
                href="about:blank"
                className="footer__link"
              >
                Studio
              </a>
            </li>
          </ul>
        </li>
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
