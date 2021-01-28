import React from 'react';
import Popup from './Popup';

const Template = (args) => <Popup {...args} />;

const DefaultPopup = {
  title: 'Common/Popup',
  component: Popup,
};
export default DefaultPopup;

export const Example = Template.bind({});
Example.args = {
  children: <div style={{ color: '#fff' }}>POPUP</div>,
  visible: true,
};
