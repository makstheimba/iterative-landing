import React from 'react';
import DeveloperCard from './DeveloperCard';
import testAvatar from '../../images/temp-avatar.jpg';

const Template = (args) => <DeveloperCard {...args} />;

const ElementDeveloperCard = {
  title: 'Element/DeveloperCard',
  component: DeveloperCard,
};
export default ElementDeveloperCard;

export const Defalt = Template.bind({});
Defalt.args = {
  title: 'Fábio Santos',
  job: 'Software engineer, Terser (new uglify-es) maintainer',
  location: 'Lisbon, Portugal',
  text:
    'I’m a passionate software engineer and architect, specialising in node.js, React and distributed systems.',
  image: testAvatar,
  color: '#f46737',
  globeLink: 'about:blank',
  twitterLink: 'about:blank',
  linkedinLink: 'about:blank',
};
