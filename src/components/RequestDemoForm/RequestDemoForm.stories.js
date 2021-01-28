import React from 'react';
import RequestDemoForm from './RequestDemoForm';

const Template = (args) => <RequestDemoForm {...args} />;

const MainRequestDemoForm = {
  title: 'Main/RequestDemoForm',
  component: RequestDemoForm,
};
export default MainRequestDemoForm;

export const Example = Template.bind({});
Example.args = {
  visible: true,
};
