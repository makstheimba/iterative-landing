import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

export default function Icon({
  icon,
  link,
  linkDescription,
  widthPixelSizes = [],
  heightPixelSizes = [],
  background = 'dark',
}) {
  const [widthS, widthM, widthL] = widthPixelSizes;
  const [
    heightS = widthS,
    heightM = widthM,
    heightL = widthL,
  ] = heightPixelSizes;
  const cssVars = {
    '--width-s': `${widthS}px`,
    '--width-m': `${widthM}px`,
    '--width-l': `${widthL}px`,
    '--height-s': `${heightS}px`,
    '--height-m': `${heightM}px`,
    '--height-l': `${heightL}px`,
    '--icon-img': `url(${icon})`,
  };

  return link ? (
    <a
      target="_blank"
      rel="noreferrer"
      style={cssVars}
      href={link}
      className={`icon icon_is-link_${background}`}
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
  widthPixelSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  heightPixelSizes: PropTypes.arrayOf(PropTypes.number),
  background: PropTypes.oneOf(['light', 'dark']),
};
