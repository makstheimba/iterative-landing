import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

export default function Avatar({ image, color, shape, isClick, onClick }) {
  const circleClass = !isClick ? "avatar-circle" : "avatar-circle avatar-circle-clicked";
  return (
    <div className="avatar" >
      { shape === "square" &&
        <div className="avatar-square">
          <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" className="avatar__background">
            <path d="M2.24814 50.7004C-2.18305 34.163 7.631 17.1645 24.1685 12.7333L63.2996 2.24814C79.837 -2.18305 96.8355 7.631 101.267 24.1685L111.752 63.2996C116.183 79.837 106.369 96.8355 89.8316 101.267L50.7004 111.752C34.163 116.183 17.1645 106.369 12.7333 89.8316L2.24814 50.7004Z" stroke={color} stroke-width="2" />
          </svg>
          <div className="avatar__item"><div style={{ backgroundImage: `url(${image})` }} className="avatar__item-img"></div></div>
        </div>}
      { shape === "circle" &&
        <div style={{ backgroundImage: `url(${image})` }} className={circleClass} onClick={onClick}></div>
      }
    </div >
  )
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  isClick: PropTypes.bool,
}
