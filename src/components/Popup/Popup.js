import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Popup.css';

export default function Popup({ children, visible, onClose }) {
  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : 'visible';
  }, [visible]);

  function checkIfOverlayWasClicked(e) {
    if (e.target.classList.contains('popup')) {
      onClose();
    }
  }

  return (
    <div
      onClick={checkIfOverlayWasClicked}
      className={`popup ${visible && 'popup_visible'}`}
    >
      <div className="popup__container">{children}</div>
    </div>
  );
}

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
