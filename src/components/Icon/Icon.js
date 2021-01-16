import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

export default function Icon({ icon, link, linkDescription, pixelSizes }) {
  const [sizeS, sizeM, sizeL] = pixelSizes;
  const cssVars = {
    '--size-s': `${sizeS}px`,
    '--size-m': `${sizeM}px`,
    '--size-l': `${sizeL}px`,
    '--icon-img': `url(${icon})`,
  };

  return link ? (
    <a
      target="_blank"
      rel="noreferrer"
      style={cssVars}
      href={link}
      className="icon icon_is-link"
    >
      <span className="icon__visually-hidden-el">{linkDescription}</span>
    </a>
  ) : (
    <span style={cssVars} className="icon"></span>
  );
}

Icon.propTypes = {
  icon: PropTypes.any.isRequired,
  link: PropTypes.string,
  linkDescription: PropTypes.string,
  pixelSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};
