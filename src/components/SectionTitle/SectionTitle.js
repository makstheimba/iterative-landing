import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import './SectionTitle.css';

export default function SectionTitle({ title, subtitle, text, children }) {
  return (
    <div className="sectiontitle">
      <div className="sectiontitle__line"></div>
      <Title size="m" title={title} />
      <h3 className="sectiontitle__subtitle">{subtitle}</h3>
      <p className="sectiontitle__text">{text}</p>
      {children}
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string,
};
