import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import logoImg from '../../images/iterative-icon.svg';
import label from '../../images/iterative.svg';
import './Logo.css';

export default function Logo({ link, linkDescription }) {
  return (
    <>
      {link ? (
        <Link to={link} className="logo">
          <img
            className="logo logo__icon"
            src={logoImg}
            alt="Iterative logo icon"
          />
          <img
            className="logo logo__label"
            src={label}
            alt="Logo label saying iterative"
          />
          <span className="logo__visually-hidden-el">{linkDescription}</span>
        </Link>
      ) : (
        <div className="logo">
          <img
            className="logo logo__icon"
            src={logoImg}
            alt="Iterative logo icon"
          />
          <img
            className="logo logo__label"
            src={label}
            alt="Logo label saying iterative"
          />
        </div>
      )}
    </>
  );
}

Logo.propTypes = {
  link: PropTypes.string,
  linkDescription: PropTypes.string,
};
