import React from 'react';
import './PricingCardList.css';
import PricingCard from '../PricingCard/PricingCard';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import cmlIcon from '../../images/icn-cml.svg';
import dvcIcon from '../../images/icn-dvc.svg';
import viewerIcon from '../../images/icn-viewer.svg';

export default function PricingCardList({ onClick }) {
  return (
    <ul className="pricing-card-list">
      <PricingCard
        title="Open-source"
        subtitle="Individuals and teams &nbsp; &nbsp; &nbsp;"
        description="DVC, CML, our other open-source tools come for free, no strings attached"
      >
        <ul className="pricing-card-list__link-container">
          <li className="pricing-card-list__link-item pricing-card-list__link-item-right-border">
            <a
              href="about:blank"
              rel="noreferrer"
              target="_blank"
              className="pricing-card-list__link"
            >
              <Icon icon={cmlIcon} widthPixelSizes={[24, 24, 32]} /> Go to CML
            </a>
          </li>
          <li className="pricing-card-list__link-item">
            <a
              href="about:blank"
              rel="noreferrer"
              target="_blank"
              className="pricing-card-list__link"
            >
              <Icon icon={dvcIcon} widthPixelSizes={[24, 24, 32]} /> Go to DVC
            </a>
          </li>
        </ul>
      </PricingCard>
      <PricingCard
        title="SaaS"
        subtitle="Visualisation and team collaboration "
        description="Studio is an extension of GitHub, GitLab or BitBucket. Sign up for the online SaaS version or contact us to get on-premise installation"
      >
        <div className="pricing-card-list__link-viewer">
          <a
            href="about:blank"
            rel="noreferrer"
            target="_blank"
            className="pricing-card-list__link"
          >
            <Icon icon={viewerIcon} widthPixelSizes={[24, 24, 32]} /> Go to
            Studio
          </a>
        </div>
      </PricingCard>
      <PricingCard
        title="Enterprise"
        subtitle="Cross-org collaboration"
        description="Extend your unstructured data storages with data compliance, data access control and SSO capabilities. Online as well as on-premise installation are available"
      >
        <Button type="orange-gradient" size="large" onClick={onClick}>
          Contact Us
        </Button>
      </PricingCard>
    </ul>
  );
}
