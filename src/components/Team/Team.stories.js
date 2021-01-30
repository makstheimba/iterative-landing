import React from 'react';
import Team from './Team';
import { developers } from '../../utils/data';

const Template = (args) => <Team {...args} />;

const AboutTeam = {
  title: 'About/Team',
  component: Team,
};
export default AboutTeam;

export const Default = Template.bind({});
Default.args = { developers };
