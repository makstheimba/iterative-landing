import React from 'react';
import CompanyHighlightList from './CompanyHighlightList';

const Template = (args) => <CompanyHighlightList {...args} />;

const ElementCompanyHighlightList = {
  title: 'Element/CompanyHighlightList',
  component: CompanyHighlightList,
};

export default ElementCompanyHighlightList;

export const Default = Template.bind({});
