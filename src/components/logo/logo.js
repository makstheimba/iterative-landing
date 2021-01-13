import * as React from 'react';
import PropTypes from 'prop-types';
import './logo.css';

export function Logo({ size }) {
  // TODO: implement an actual logo
  return <span className={`logo logo_size_${size}`}>Stub for the logo</span>;
}

Logo.propTypes = {
  size: PropTypes.oneOf(['s', 'm']),
};
