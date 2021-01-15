import React from 'react';
import Cookies from './Cookies';

const Template = (args) => <Cookies {...args} />;

const CommonCookies = {
  title: 'Common/Cookies',
  component: Cookies,
};
export default CommonCookies;

export const Default = Template.bind({});
