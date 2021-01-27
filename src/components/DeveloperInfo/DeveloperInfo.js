import React from 'react';
import './DeveloperInfo.css';
import Avatar from '../Avatar/Avatar';

export default function DeveloperInfo({ developers = [] }) {
  return (
    <ul className="developerInfo">
      {developers.map((developer, i) => (
        <li key={i} className="developerInfo__list-item">
          <Avatar
            image={developer.image}
            color={developer.color}
            shape="square"
          />
          <div className="developerInfo__text-container">
            <h4 className="developerInfo__name">{developer.name}</h4>
            <p className="developerInfo__description">
              {developer.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
