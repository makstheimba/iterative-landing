import React from 'react';

import Title from './Title';

const Template = (args) => <Title {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
  title: '2017',
};

export const Small = Template.bind({});
Small.args = {
  size: 's',
  title: 'Open-source',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
  title: 'Enterprise',
};

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  title: 'Open platform to operationalize AI',
};

const ExampleTitle = {
  title: 'Common/Title',
  component: Title,
};

export default ExampleTitle;
