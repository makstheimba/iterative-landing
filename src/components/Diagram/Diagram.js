import React from 'react';
import smDiagram from '../../images/diagram-sm.svg';
import lgDiagram from '../../images/diagram-lg.svg';
import './Diagram.css';

export default function Diagram() {
  return (
    <picture>
      <source srcset={lgDiagram} media="(min-width: 768px)" />
      <img
        className="diagram"
        src={smDiagram}
        alt="Iterative Enterprise: Data compliance, Data access control, Access to clouds & kubernetes SSO. DVC: Data versioning, Model versioning, and ML experiment. Studio: Team collaboration, ML experiments dashboard, Data discovery. CML: ML model testing, Training in clouds, ML model reports, and ML environment versioning."
      />
    </picture>
  );
}
