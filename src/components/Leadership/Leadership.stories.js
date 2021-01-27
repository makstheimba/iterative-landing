import React from 'react';
import Leadership from './Leadership';

const Template = (args) => <Leadership {...args} />;

const AboutLeadership = {
  title: 'About/Leadership',
  component: Leadership,
};
export default AboutLeadership;

export const Default = Template.bind({});
