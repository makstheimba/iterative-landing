import React from 'react';
import PropTypes from 'prop-types';
import './QuickLinks.css';

export default function QuickLinks({  children }) {
  return <ul className="quickLinks">
    <ul className="quickLinks__list">
      <li><h2 className="quickLinks__heading">COMPANY</h2></li>
      <li className="quickLinks__link">About US</li>
      <li className="quickLinks__link">Pricing</li>
    </ul>
    <ul className="quickLinks__list">
      <li><h2 className="quickLinks__heading">LEGAL</h2></li>
      <li className="quickLinks__link">Privacy policy</li>
      <li className="quickLinks__link">Terms of use</li>
    </ul>
    <ul className="quickLinks__list">
      <li><h2 className="quickLinks__heading">OUR PRODUCTS</h2></li>
      <li className="quickLinks__link">DVC</li>
      <li className="quickLinks__link">CML</li>
      <li className="quickLinks__link">Studio</li>
    </ul>
  </ul>
};

QuickLinks.propTypes = {
  children: PropTypes.node.isRequired
};
