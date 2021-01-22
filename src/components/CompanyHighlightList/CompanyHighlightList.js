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
        text="Don’t reinvent the wheel! Fast&nbsp;and cost-efficient path to production"
        description="Gear Icon"
      />
      <CompanyHighlight
        icon={codeIcon}
        title="Open source"
        text="Lightweight. Open-source. No&#8209;strings attached."
        description="Code Icon"
      />
      <CompanyHighlight
        icon={shieldIcon}
        title="Secure"
        text="You data is always stored by you. Your models are trained on your machines"
        description="Shield Icon"
      />
    </ul>
  );
}
