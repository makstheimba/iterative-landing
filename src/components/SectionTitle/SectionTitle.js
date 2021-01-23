import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import './SectionTitle.css';

export default function SectionTitle({ title, subtitle, text, children }) {
  return (
    <section className="sectiontitle">
      <div className="sectiontitle__line"></div>
      <Title size="m" title={title} />
      {typeof subtitle === 'string' ? (
        <h3 className="sectiontitle__subtitle">{subtitle}</h3>
      ) : (
        subtitle
      )}
      <p className="sectiontitle__text">{text}</p>
      {children}
    </section>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.node,
  text: PropTypes.string,
};
