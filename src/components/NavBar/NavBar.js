import React, { useState } from 'react';
import { Link } from 'gatsby';
import chevronDownIcon from '../../images/icn-chevron-down.svg';
import twitterIcon from '../../images/icn-twitter.svg';
import githubIcon from '../../images/icn-github.svg';
import youtubeIcon from '../../images/icn-youtube.svg';
import chevronUpIcon from '../../images/icn-chevron-top.svg';
import cmlIcon from '../../images/icn-cml.svg';
import dvcIcon from '../../images/icn-dvc.svg';
import viewerIcon from '../../images/icn-viewer.svg';
import linkIcon from '../../images/inc-link.svg';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import './NavBar.css';

export default function NavBar() {
  const [isProductsModelOpen, setIsProductsModelOpen] = useState(false);

  function toggleProductsModel() {
    setIsProductsModelOpen(!isProductsModelOpen);
  }

  return (
    <nav className="nav-bar">
      <div
        className={`nav-bar__dropdown ${
          isProductsModelOpen && 'nav-bar__dropdown_visible'
        } nav-bar__dropdown_place_logo`}
      >
        <button onClick={toggleProductsModel} className="nav-bar__dropdown-btn">
          <Logo />{' '}
          <Icon
            icon={isProductsModelOpen ? chevronUpIcon : chevronDownIcon}
            widthPixelSizes={[10, 10, 10]}
          />
        </button>
        <ul
          className={`nav-bar__items nav-bar__dropdown-items ${
            isProductsModelOpen && 'nav-bar__dropdown-items_visible'
          }`}
        >
          <li className="nav-bar__dropdown-item">
            <a
              className="nav-bar__product"
              href="about:blank"
              target="_blank"
              rel="noreferrer"
            >
              <div className="nav-bar__product-icon">
                <Icon
                  widthPixelSizes={[32, 32, 32]}
                  heightPixelSizes={[19, 19, 19]}
                  icon={viewerIcon}
                />
              </div>
              <p className="nav-bar__product-title">
                Viewer <Icon widthPixelSizes={[12, 12, 12]} icon={linkIcon} />
              </p>
              <p className="nav-bar__product-description">
                Track and share insights from ML projects
              </p>
            </a>
          </li>
          <li className="nav-bar__dropdown-item">
            <a
              className="nav-bar__product"
              href="about:blank"
              target="_blank"
              rel="noreferrer"
            >
              <div className="nav-bar__product-icon">
                <Icon
                  widthPixelSizes={[32, 32, 32]}
                  heightPixelSizes={[22, 22, 22]}
                  icon={dvcIcon}
                />
              </div>
              <p className="nav-bar__product-title">DVC</p>
              <p className="nav-bar__product-description">
                Open-source version control system for ML projects
              </p>
            </a>
          </li>
          <li className="nav-bar__dropdown-item">
            <a
              className="nav-bar__product"
              href="about:blank"
              target="_blank"
              rel="noreferrer"
            >
              <div className="nav-bar__product-icon">
                <Icon
                  widthPixelSizes={[32, 32, 32]}
                  heightPixelSizes={[19, 19, 19]}
                  icon={cmlIcon}
                />
              </div>
              <p className="nav-bar__product-title">CML</p>
              <p className="nav-bar__product-description">
                Open-source CI/CD for ML projects
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-bar__logo-img">
        <Logo />
      </div>
      <ul className="nav-bar__items nav-bar__menu-items">
        <li className="nav-bar__menu-item">
          <Link
            activeClassName="nav-bar__menu-text_active"
            to="/about/"
            className="nav-bar__menu-text"
          >
            About Us
          </Link>
        </li>
        <li className="nav-bar__menu-item">
          <Link
            activeClassName="nav-bar__menu-text_active"
            to="/pricing/"
            className="nav-bar__menu-text"
          >
            Pricing
          </Link>
        </li>
      </ul>
      <div className="nav-bar__menu-divider"></div>
      <div className="nav-bar__dropdown nav-bar__dropdown_place_menu">
        <button
          onClick={toggleProductsModel}
          className={`nav-bar__menu-text ${
            isProductsModelOpen && 'nav-bar__menu-text_active'
          } nav-bar__dropdown-btn`}
        >
          Products{' '}
          <Icon
            icon={isProductsModelOpen ? chevronUpIcon : chevronDownIcon}
            widthPixelSizes={[10, 15, 15]}
          />{' '}
        </button>
        <ul
          className={`nav-bar__items nav-bar__dropdown-items ${
            isProductsModelOpen && 'nav-bar__dropdown-items_visible'
          }`}
        >
          <li className="nav-bar__dropdown-item">
            <a
              className="nav-bar__product"
              href="about:blank"
              target="_blank"
              rel="noreferrer"
            >
              <div className="nav-bar__product-icon">
                <Icon
                  widthPixelSizes={[32, 32, 32]}
                  heightPixelSizes={[19, 19, 19]}
                  icon={viewerIcon}
                />
              </div>
              <p className="nav-bar__product-title">
                Viewer <Icon widthPixelSizes={[12, 12, 12]} icon={linkIcon} />
              </p>
              <p className="nav-bar__product-description">
                Track and share insights from ML projects
              </p>
            </a>
          </li>
          <li className="nav-bar__dropdown-item">
            <a
              className="nav-bar__product"
              href="about:blank"
              target="_blank"
              rel="noreferrer"
            >
              <div className="nav-bar__product-icon">
                <Icon
                  widthPixelSizes={[32, 32, 32]}
                  heightPixelSizes={[22, 22, 22]}
                  icon={dvcIcon}
                />
              </div>
              <p className="nav-bar__product-title">DVC</p>
              <p className="nav-bar__product-description">
                Open-source version control system for ML projects
              </p>
            </a>
          </li>
          <li className="nav-bar__dropdown-item">
            <a
              className="nav-bar__product"
              href="about:blank"
              target="_blank"
              rel="noreferrer"
            >
              <div className="nav-bar__product-icon">
                <Icon
                  widthPixelSizes={[32, 32, 32]}
                  heightPixelSizes={[19, 19, 19]}
                  icon={cmlIcon}
                />
              </div>
              <p className="nav-bar__product-title">CML</p>
              <p className="nav-bar__product-description">
                Open-source CI/CD for ML projects
              </p>
            </a>
          </li>
        </ul>
      </div>
      <ul className="nav-bar__items nav-bar__connect-items">
        <li className="nav-bar__connect-item">
          <Icon
            link="about:blank"
            linkDescription="Go to Twitter"
            icon={twitterIcon}
            widthPixelSizes={[16, 16, 24]}
          />
        </li>
        <li className="nav-bar__connect-item">
          <Icon
            link="about:blank"
            linkDescription="Go to Github"
            icon={githubIcon}
            widthPixelSizes={[16, 16, 24]}
          />
        </li>
        <li className="nav-bar__connect-item">
          <Icon
            link="about:blank"
            linkDescription="Go to Youtube"
            icon={youtubeIcon}
            widthPixelSizes={[16, 16, 24]}
          />
        </li>
      </ul>
    </nav>
  );
}
