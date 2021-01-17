import React from 'react';
import Icon from './Icon';
import twitterIcon from '../../images/icn-twitter.svg';
import gearIcon from '../../images/icn-gear.svg';
import standardClient from '../../images/client-standard.svg';

const Template = (args) => <Icon {...args} />;

const CommonIcon = {
  title: 'Common/Icon',
  component: Icon,
};
export default CommonIcon;

export const Link = Template.bind({});
Link.args = {
  icon: twitterIcon,
  widthPixelSizes: [24, 24, 16],
  link: 'https://twitter.com/home',
  linkDescription: 'Go to twitter',
};

export const Image = Template.bind({});
Image.args = {
  icon: gearIcon,
  widthPixelSizes: [48, 40, 32],
};

export const Client = Template.bind({});
Client.args = {
  icon: standardClient,
  widthPixelSizes: [52, 78, 130],
  heightPixelSizes: [6, 9, 16],
};
