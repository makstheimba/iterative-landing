import React from 'react';
import FormCheck from './FormCheck';

const Template = (args) => <FormCheck {...args} />;

export const Square = Template.bind({});
Square.args = {
  shape: 'square',
  text: 'add text in prompt',
};

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
  text: 'add text in prompt',
};

const ExampleFormCheck = {
  title: 'Element/Form-check',
  component: FormCheck,
};

export default ExampleFormCheck;
