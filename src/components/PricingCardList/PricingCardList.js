import React from 'react';
import './PricingCardList.css';
import PricingCard from '../PricingCard/PricingCard';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import cmlIcon from '../../images/icn-cml.svg';
import dvcIcon from '../../images/icn-dvc.svg';
import viewerIcon from '../../images/icn-viewer.svg';

export default function PricingCardList() {
  return (
    <ul className="pricing-card-list">
      <PricingCard
        title="Open-source"
        subtitle="Individuals and teams"
        description="DVC, CML, our other open-source tools come for free, no strings attached"
        children={
          <ul className="pricing-card-list__link-container">
            <li className="pricing-card-list__link">
              <Icon
                icon={cmlIcon}
                link="about:blank"
                linkDescription="Go to CML"
                widthPixelSizes={[24, 24, 32]}
                background="light"
              />
              <p className="pricing-card-list__link-text left"> Go to CML</p>
            </li>
            <li className="pricing-card-list__link">
              <Icon
                icon={dvcIcon}
                link="about:blank"
                linkDescription="Go to DVC"
                widthPixelSizes={[24, 24, 32]}
                background="light"
              />
              <p className="pricing-card-list__link-text"> Go to DVC</p>
            </li>
          </ul>
        }
      />
      <PricingCard
        title="SaaS"
        subtitle="Visualisation and team collaboration "
        description="Studio is an extension of GitHub, GitLab or BitBucket. Sign up for the online SaaS version or contact us to get on-premise installation"
        children={
          <div className="pricing-card-list__link-viewer">
            <Icon
              icon={viewerIcon}
              link="about:blank"
              linkDescription="Go to  Studio"
              widthPixelSizes={[24, 24, 32]}
              background="light"
            />
            <p className="pricing-card-list__link-text"> Go to Studio</p>
          </div>
        }
      />
      <PricingCard
        title="Enterprise"
        subtitle="Cross-org collaboration"
        description="Extend your unstructured data storages with data compliance, data access control and SSO capabilities. Online as well as on-premise installation are available"
        children={
          <Button type="orange-gradient" size="large">
            Contact Us
          </Button>
        }
      />
    </ul>
  );
}
