import React from 'react';
import Button from './Button';

const Template = (args) => <Button {...args} />;

const CommonButton = {
  title: 'Common/Button',
  component: Button,
};
export default CommonButton;

export const BlueGradient = Template.bind({});
BlueGradient.args = {
  type: 'blue-gradient',
  children: 'Request a Demo',
};

export const OrangeGradient = Template.bind({});
OrangeGradient.args = {
  type: 'orange-gradient',
  children: 'Contact us',
};

export const LightBlueGradient = Template.bind({});
LightBlueGradient.args = {
  type: 'light-blue',
  children: 'Apply',
};
