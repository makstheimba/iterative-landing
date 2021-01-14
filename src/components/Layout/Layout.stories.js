import React from 'react';
import Layout from './Layout';

const Template = (args) => <Layout {...args} />;

const CommonLayout = {
  title: 'Common/Layout',
  component: Layout,
};
export default CommonLayout;

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: <div style={{ height: '800px' }}>IM EXAMPLE TEXT</div>,
};
