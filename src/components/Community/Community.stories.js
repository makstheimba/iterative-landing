import React from 'react';
import Community from './Community';

const Template = (args) => <Community {...args} />;

const ElementCommunity = {
  title: 'Element/Community',
  component: Community,
};
export default ElementCommunity;

export const Default = Template.bind({});
