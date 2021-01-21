import React from 'react';
import CommunityCard from './CommunityCard';

const Template = (args) => <CommunityCard {...args} />;

const CommonCommunityCard = {
  title: 'Element/CommunityCard',
  component: CommunityCard,
};

export default CommonCommunityCard;

export const Default = Template.bind({});
Default.args = {
  title: '200+',
  description: 'Open Source Contributors',
};
