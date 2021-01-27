import React from 'react';
import FormInput from './FormInput';

const Template = (args) => <FormInput {...args} />;

const ExampleFormInput = {
  title: 'Common/FormInput',
  component: FormInput,
};
export default ExampleFormInput;

export const Default = Template.bind({});
Default.args = {
  name: 'default',
  caption: 'Default',
  value: 'Test',
  inputOpts: { type: 'text' },
};

export const Invalid = Template.bind({});
Invalid.args = {
  name: 'invalid',
  caption: 'Invalid',
  value: 'Add focus to see errors',
  inputOpts: { type: 'email' },
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'disabled',
  caption: 'Disabled',
  value: 'disabled',
  inputOpts: { type: 'text' },
  disabled: true,
};
