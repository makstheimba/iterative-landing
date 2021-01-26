import React from 'react';
import Enterprise from './Enterprise';

export const Template = (args) => <Enterprise {...args} />;

const MainEnterprise = {
  title: 'Main/Enterprise',
  component: Enterprise,
};
export default MainEnterprise;
