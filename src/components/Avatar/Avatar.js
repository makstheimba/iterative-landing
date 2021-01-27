import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';
import avatarBgGradient from '../../images/avatar-bg-gradient.svg';

export default function Avatar({ image, color, shape, alt, onClick }) {
  const fill = image ? 'url(#avatarImg)' : '#0f1624';
  const squareAltClass = image ? 'avatar__hidden-el' : 'avatar__square_alt';
  const squareAltBorder = image ? '' : '#fff';
  const circleAltClass = image ? 'avatar__hidden-el' : 'avatar__circle_alt';

  return (
    <div className="avatar">
      {shape === 'square' && (
        <div className="avatar__square">
          {color ? (
            <svg
              width="114"
              height="114"
              viewBox="0 0 114 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="avatar__square_item"
            >
              <path
                d="M2.24814 50.7004C-2.18305 34.163 7.631 17.1645 24.1685 12.7333L63.2996 2.24814C79.837 -2.18305 96.8355 7.631 101.267 24.1685L111.752 63.2996C116.183 79.837 106.369 96.8355 89.8316 101.267L50.7004 111.752C34.163 116.183 17.1645 106.369 12.7333 89.8316L2.24814 50.7004Z"
                stroke={color}
                strokeWidth="2"
              />
            </svg>
          ) : (
            <img
              src={avatarBgGradient}
              className="avatar__square_item"
              alt="avatar background square"
            />
          )}
          <svg
            aria-labelledby="alt-span-id"
            width="114"
            height="114"
            viewBox="0 0 114 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="avatar__square_item avatar__square_item_shift"
          >
            <defs>
              <pattern
                id="avatarImg"
                patternUnits="userSpaceOnUse"
                width="150"
                height="150"
              >
                <image href={image} x="-15" y="-20" width="150" height="150" />
              </pattern>
            </defs>
            <path
              fill={fill}
              d="M2.24814 50.7004C-2.18305 34.163 7.631 17.1645 24.1685 12.7333L63.2996 2.24814C79.837 -2.18305 96.8355 7.631 101.267 24.1685L111.752 63.2996C116.183 79.837 106.369 96.8355 89.8316 101.267L50.7004 111.752C34.163 116.183 17.1645 106.369 12.7333 89.8316L2.24814 50.7004Z"
              stroke={squareAltBorder}
              strokeWidth="0.5"
            />
          </svg>
          <span id="alt-span-id" className={squareAltClass}>
            {alt || 'avatar'}
          </span>
        </div>
      )}
      {shape === 'circle' && (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="avatar__circle"
          onClick={onClick}
        >
          <span className={circleAltClass}>{alt || 'avatar'}</span>
        </div>
      )}
    </div>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['square', 'circle']),
  color: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};
