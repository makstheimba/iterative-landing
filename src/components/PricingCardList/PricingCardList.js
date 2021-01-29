import React from 'react';
import './PricingCardList.css';
import PricingCard from '../PricingCard/PricingCard';
import Button from '../Button/Button';

export default function PricingCardList() {
  return (
    <ul className="pricing-card-list">
      <PricingCard
        title="Open-source"
        subtitle="Individuals and teams"
        description="DVC, CML, our other open-source tools come for free, no strings attached"
        children={
          <Button type="orange-gradient" size="default">
            Contact Us
          </Button>
        }
      />
      <PricingCard
        title="SaaS"
        subtitle="Visualisation and team collaboration "
        description="Studio is an extension of GitHub, GitLab or BitBucket. Sign up for the online SaaS version or contact us to get on-premise installation"
        children={
          <Button type="orange-gradient" size="default">
            Contact Us
          </Button>
        }
      />
      <PricingCard
        title="Enterprise"
        subtitle="Cross-org collaboration"
        description="Extend your unstructured data storages with data compliance, data access control and SSO capabilities. Online as well as on-premise installation are available"
        children={
          <Button type="orange-gradient" size="default">
            Contact Us
          </Button>
        }
      />
    </ul>
  );
}
