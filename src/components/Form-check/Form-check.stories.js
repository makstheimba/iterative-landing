import React from 'react';
import FormCheck from './Form-check';

const Template = (args) => <FormCheck {...args} />;

export const Square = Template.bind({});
Square.args = {
  shape: 'square',
  text: 'add text in prompt',
  isChecked: true,
};

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
  text: 'add text in prompt',
  isChecked: true,
};

const ExampleFormCheck = {
  title: 'Element/Form-check',
  component: FormCheck,
};

export default ExampleFormCheck;
