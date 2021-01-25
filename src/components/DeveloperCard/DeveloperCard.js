import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Avatar from '../Avatar/Avatar';
import './DeveloperCard.css';
import locationIcon from '../../images/icn-location-gray.svg';
import globeIcon from '../../images/icn-globe-gray.svg';
import twitterIcon from '../../images/icn-twitter-gray.svg';
import linkedinIcon from '../../images/icn-linkedin-gray.svg';

export default function DeveloperCard({
  title,
  job,
  location,
  text,
  image,
  globeLink,
  twitterLink,
  linkedinLink,
}) {
  return (
    <div className="developercard">
      <div className="developercard__container">
        <div className="developercard__text-container">
          <h4 className="developercard__title">{title}</h4>
          <p className="developercard__job">{job}</p>
          <div className="developercard__location-container">
            <Icon icon={locationIcon} widthPixelSizes={[16, 16, 16]} />
            <p className="developercard__location">{location}</p>
          </div>
        </div>
        <div className="developercard__avatar">
          <Avatar image={image} shape="square" />
        </div>
      </div>
      <div className="developercard__line"></div>
      <p className="developercard__text">{text}</p>
      <ul className="developercard__icon-container">
        <li className="developercard__icon">
          <Icon
            icon={globeIcon}
            link={globeLink}
            linkDescription="Go to personal page"
            widthPixelSizes={[14, 14, 14]}
            background="light"
          />
        </li>
        <li>
          <Icon
            icon={twitterIcon}
            link={twitterLink}
            linkDescription="Go to Twitter"
            widthPixelSizes={[15, 15, 15]}
            background="light"
          />
        </li>
        <li>
          <Icon
            icon={linkedinIcon}
            link={linkedinLink}
            linkDescription="Go to LinkedIn "
            widthPixelSizes={[13, 13, 13]}
            background="light"
          />
        </li>
      </ul>
    </div>
  );
}

DeveloperCard.propTypes = {
  title: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  globeLink: PropTypes.string,
  twitterLink: PropTypes.string,
  linkedinLink: PropTypes.string,
};
