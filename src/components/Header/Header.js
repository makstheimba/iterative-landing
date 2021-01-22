import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import NavBar from '../NavBar/NavBar';
import './Header.css';

export default function Header({ title, text, isMain, children }) {
  return (
    <header className={`header ${isMain && 'header__is-main'}`}>
      <NavBar />
      <Title size="l" title={title} />
      {typeof text === 'string' ? <p className="header__text">{text}</p> : text}
      {children}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  isMain: PropTypes.bool,
};
