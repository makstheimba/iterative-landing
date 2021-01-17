import React from 'react';
import Avatar from './Avatar';
import testAvatar from '../../images/temp-avatar.jpg';

const Template = (args) => <Avatar {...args} />;

const CommonAvatar = {
  title: 'Element/Avatar',
  component: Avatar,
};
export default CommonAvatar;

export const Square = Template.bind({});
Square.args = {
  shape: 'square',
  image: testAvatar,
  color: '#945DD6',
}

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
  image: testAvatar,
  color: '#945DD6',
  isClicked: false,
}

