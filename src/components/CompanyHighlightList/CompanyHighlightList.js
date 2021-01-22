import React from 'react';
import './CompanyHighlightList.css';
import CompanyHighlight from '../CompanyHighlight/CompanyHighlight';
import gearIcon from '../../images/icn-gear.svg';
import codeIcon from '../../images/icn-code.svg';
import shieldIcon from '../../images/icn-shield.svg';

export default function CompanyHighlightList() {
  return (
    <ul className="company-highlight-list">
      <CompanyHighlight
        icon={gearIcon}
        title="Familiar"
        description="Don’t reinvent the wheel! Fast&nbsp;and cost&#8209;efficient path to production"
      />
      <CompanyHighlight
        icon={codeIcon}
        title="Open source"
        description="Lightweight.&nbsp;Open&#8209;source. No&#8209;strings attached."
      />
      <CompanyHighlight
        icon={shieldIcon}
        title="Secure"
        description="You data is always stored by you. Your models are trained on your machines"
      />
    </ul>
  );
}
