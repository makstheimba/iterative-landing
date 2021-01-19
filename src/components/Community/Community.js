import React from 'react';
import Title from '../Title/Title';
import CommunityCard from '../CommunityCard/CommunityCard';
import Icon from '../Icon/Icon';
import './Community.css';
import icnDiscard from '../../images/icn-discord.svg';
import icnGithub from '../../images/icn-github.svg';
import icnTwitter from '../../images/icn-twitter.svg';

export default function Community() {
  return (
    <section className="community">
      <div className="community__line"></div>
      <Title size="m" title="Meet our community" />
      <ul className="community__cardlist">
        <CommunityCard title="200+" description="Open Source Contributors" />
        <CommunityCard title="4000+" description="Community members" />
        <CommunityCard title="1000+" description="Companies" />
        <CommunityCard title="9000+" description="Github Stars" />
      </ul>
      <div className="community__container">
        <p className="community__text">Join the community:</p>
        <ul className="community__iconlist">
          <Icon
            icon={icnDiscard}
            link="about:blank"
            widthPixelSizes={[32, 24, 32]}
          />
          <Icon
            icon={icnGithub}
            link="about:blank"
            widthPixelSizes={[32, 24, 32]}
          />
          <Icon
            icon={icnTwitter}
            link="about:blank"
            widthPixelSizes={[32, 24, 32]}
          />
        </ul>
      </div>
    </section>
  );
}
