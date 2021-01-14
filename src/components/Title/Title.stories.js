import React from 'react';

import Title from './Title';

const Template = (args) => <Title {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 's',
  title: 'add title in prompt'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
  title: 'add title in prompt'
};

export const Large = Template.bind({});
Large.args = {
  size: 'l',
  title: 'add title in prompt'
};

const ExampleTitle = {
  title: 'Common/Title',
  component: Title,
};

export default ExampleTitle;
