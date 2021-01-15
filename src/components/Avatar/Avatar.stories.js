import React from 'react';
import Avatar from './Avatar';
import testAvatar from '../../images/temp-avatar.jpg';

const Template = (args) => <Avatar {...args} />;

const CommonAvatar = {
  title: 'Element/Avatar',
  component: Avatar,
};
export default CommonAvatar;

export const Default = Template.bind({});
Default.args = {
  image: testAvatar,
  color: '#945DD6',
};
