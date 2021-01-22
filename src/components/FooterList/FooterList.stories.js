import React from 'react';
import FooterList from './FooterList';

const Template = (args) => <FooterList {...args} />;

const CommonFooterList = {
  title: 'Common/FooterList',
  component: FooterList,
};
export default CommonFooterList;

export const Default = Template.bind({});
Default.args = {
  title: 'Our Products',
  links: [
    { url: 'about:blank', text: 'DVC' },
    { url: 'about:blank', text: 'CML' },
    { url: 'about:blank', text: 'Studio' },
  ],
};
