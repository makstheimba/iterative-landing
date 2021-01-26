import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Diagram from '../Diagram/Diagram';
import CompanyHighlightList from '../CompanyHighlightList/CompanyHighlightList';
import './Enterprise.css';

export default function Enterprise() {
  return (
    <section className="enterprise">
      <SectionTitle
        title="Enterprise"
        subtitle="AI hand in hand with software development. Built with data scientists, ML engineers, and data engineers in mind."
      />
      <Diagram />
      <CompanyHighlightList />
    </section>
  );
}
