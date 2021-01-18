import React from 'react';
import Avatar from './Avatar';
import testAvatar from '../../images/temp-avatar.jpg';

const Template = (args) => <Avatar {...args} />;

const CommonAvatar = {
  title: 'Element/Avatar',
  component: Avatar,
};
export default CommonAvatar;

export const Shape = Template.bind({});
Shape.args = {
  shape: 'square',
  image: testAvatar,
  color: '#945DD6',
}

export const ShapeAltCustom = Template.bind({});
ShapeAltCustom.args = {
  shape: 'square',
  image: '',
  color: '#945DD6',
  alt: 'leadership avatar',
}

export const ShapeAltDefault = Template.bind({});
ShapeAltDefault.args = {
  shape: 'square',
  image: '',
  color: '#945DD6',
  alt: '',
}

