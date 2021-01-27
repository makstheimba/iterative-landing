import React from 'react';
import PropTypes from 'prop-types';
import './QuickLinks.css';

export default function QuickLinks() {
  return <ul className="quickLinks">
    <ul className="quickLinks__list">
      <li><h2 className="quickLinks__heading">COMPANY</h2></li>
      <li><a href="#" className="quickLinks__link">About US</a></li>
      <li><a href="#" className="quickLinks__link">Pricing</a></li>
    </ul>
    <ul className="quickLinks__list">
      <li><h2 className="quickLinks__heading">LEGAL</h2></li>
      <li><a href="#" className="quickLinks__link">Privacy policy</a></li>
      <li><a href="#" className="quickLinks__link">Terms of use</a></li>
    </ul>
    <ul className="quickLinks__list">
      <li><h2 className="quickLinks__heading">OUR PRODUCTS</h2></li>
      <li><a href="#" className="quickLinks__link">DVC</a></li>
      <li><a href="#" className="quickLinks__link">CML</a></li>
      <li><a href="#" className="quickLinks__link">Studio</a></li>
    </ul>
  </ul>
};

QuickLinks.propTypes = {
  children: PropTypes.node.isRequired
};
