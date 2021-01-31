import React from 'react';
import Button from '../Button/Button';
import PricingCard from './PricingCard';

const Template = (args) => <PricingCard {...args} />;

const PricePricingCard = {
  title: 'Price/PricingCard',
  component: PricingCard,
};

export default PricePricingCard;

export const First = Template.bind({});
First.args = {
  title: 'Enterprise',
  subtitle: 'Cross-org collaboration',
  description:
    'Extend your unstructured data storages with data compliance, data access control and SSO capabilities. Online as well as on-premise installation are available',
  children: (
    <Button type="orange-gradient" size="default">
      Contact Us
    </Button>
  ),
};
