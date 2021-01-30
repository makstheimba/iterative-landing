import React from 'react';
import WorldMap from './WorldMap';
import { developers } from '../../utils/data';

const Template = (args) => <WorldMap {...args} />;

const AboutWorldMap = {
  title: 'About/WorldMap',
  component: WorldMap,
};
export default AboutWorldMap;

export const Default = Template.bind({});
Default.args = { developers };
