import React from 'react';
import Career from './Career';

const Template = (args) => <Career {...args} />;

const AboutCareer = {
  title: 'About/Career',
  component: Career,
};
export default AboutCareer;

export const Default = Template.bind({});
