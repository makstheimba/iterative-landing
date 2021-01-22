import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './FooterList.css';

export default function FooterList({ title, links }) {
  return (
    <li className="footer-list">
      <h2 className="footer-list__title">{title}</h2>
      <ul className="footer-list__links">
        {links.map(({ text, url, isLocal }, i) => (
          <li className="footer-list__link-item" key={i}>
            {isLocal ? (
              <Link className="footer-list__link" to={url}>
                {text}
              </Link>
            ) : (
              <a
                className="footer-list__link"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

FooterList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
