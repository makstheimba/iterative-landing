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
      <p className="community__text">Join the community:</p>
      <ul className="community__iconlist">
        <Icon
          icon={icnDiscard}
          link={'#'}
          widthPixelSizes={[24.5, 18.38, 24.5]}
          heightPixelSizes={[28, 21, 28]}
        />
        <Icon
          icon={icnGithub}
          link={'#'}
          widthPixelSizes={[32, 24, 32]}
          heightPixelSizes={[31.21, 23.41, 31.21]}
        />
        <Icon
          icon={icnTwitter}
          link={'#'}
          widthPixelSizes={[30, 22.5, 30]}
          heightPixelSizes={[24.37, 18.27, 24.37]}
        />
      </ul>
    </section>
  );
}
