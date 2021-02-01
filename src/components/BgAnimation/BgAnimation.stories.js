import React from 'react';
import BgAnimation from './BgAnimation';

const Template = (args) => <BgAnimation {...args} />;

const MainBgAnimation = {
  title: 'Main/BgAnimation',
  component: BgAnimation,
};
export default MainBgAnimation;

export const Default = Template.bind({});
