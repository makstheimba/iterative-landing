import React from 'react';
import FormPopup from './FormPopup';

const Template = (args) => <FormPopup {...args} />;

const DefaultFormPopup = {
  title: 'Common/FormPopup',
  component: FormPopup,
};
export default DefaultFormPopup;

export const Example = Template.bind({});
Example.args = {
  buttonText: 'Request a demo',
  title: 'Request a demo',
  isButtonDisabled: false,
  onExitBtnClick: () => console.log('exit button clicked'),
};
