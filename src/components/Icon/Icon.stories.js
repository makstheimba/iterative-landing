import React from 'react';
import Icon from './Icon';
import twitterIcon from '../../images/icn-twitter.svg';
import gearIcon from '../../images/icn-gear.svg';

const Template = (args) => <Icon {...args} />;

const CommonIcon = {
  title: 'Common/Icon',
  component: Icon,
};
export default CommonIcon;

export const Link = Template.bind({});
Link.args = {
  icon: twitterIcon,
  pixelSizes: [24, 24, 16],
  link: 'https://twitter.com/home',
  linkDescription: 'Go to twitter',
};

export const Image = Template.bind({});
Image.args = {
  icon: gearIcon,
  pixelSizes: [48, 40, 32],
};
