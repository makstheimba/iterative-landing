import React from 'react';
import CompanyHighlight from './CompanyHighlight';
import gearIcon from '../../images/icn-gear.svg';

const Template = (args) => <CompanyHighlight {...args} />;

const ElementCompanyHighlight = {
  title: 'Element/CompanyHighlight',
  component: CompanyHighlight,
};

export default ElementCompanyHighlight;

export const Default = Template.bind({});
Default.args = {
  icon: gearIcon,
  description: 'gear icon',
  title: 'Familiar',
  text: 'Don’t reinvent the wheel! Fast and cost-efficient path to production',
};
