import React from 'react';
import PricingCardList from './PricingCardList';

const Template = (args) => <PricingCardList {...args} />;

const PricePricingCardList = {
  title: 'Price/PricingCardList',
  component: PricingCardList,
};

export default PricePricingCardList;

export const Default = Template.bind({});
