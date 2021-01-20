import React from 'react';
import Community from './Community';

const Template = (args) => <Community {...args} />;

const CommonCommunity = {
  title: 'Element/Community',
  component: Community,
};

export default CommonCommunity;

export const Default = Template.bind({});
