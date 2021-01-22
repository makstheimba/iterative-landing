import React from 'react';
import CustomersList from './CustomersList';

const Template = (args) => <CustomersList {...args} />;

const ElementCustomersList = {
  title: 'Element/CustomersList',
  component: CustomersList,
};

export default ElementCustomersList;

export const Default = Template.bind({});
