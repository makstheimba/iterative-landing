import React, { useState } from 'react';
import FormInput from './FormInput';

const Template = (args) => {
  const [value, setValue] = useState('');

  function handleChange({ val }) {
    setValue(val);
  }

  return <FormInput value={value} onChange={handleChange} {...args} />;
};

const ExampleFormInput = {
  title: 'Common/FormInput',
  component: FormInput,
};
export default ExampleFormInput;

export const Default = Template.bind({});
Default.args = {
  name: 'email',
  caption: 'E-mail',
  inputOpts: { required: true, type: 'email' },
};
