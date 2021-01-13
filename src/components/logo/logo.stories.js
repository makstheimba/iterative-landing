import React from 'react';

import { Logo } from './logo';

const Template = (args) => <Logo {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 's',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'm',
};

const ExampleHeader = {
  title: 'Example/Logo',
  component: Logo,
};

export default ExampleHeader;
