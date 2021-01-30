import React from 'react';
import AboutPage from './about';

const Template = (args) => <AboutPage {...args} />;

const AboutAboutPage = {
  title: 'About/AboutPage',
  component: AboutPage,
};
export default AboutAboutPage;

export const Default = Template.bind({});
