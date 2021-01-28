import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Popup from '../Popup/Popup';
import ExitIcon from '../../images/icn-exit.svg';
import './FormPopup.css';

export default function FormPopup({
  title,
  buttonText,
  isButtonDisabled,
  children,
  onSubmit,
  visible,
  onClose,
}) {
  return (
    <Popup visible={visible} onClose={onClose}>
      <div className="form-popup">
        <form onSubmit={onSubmit} className="form-popup__form" noValidate>
          <div className="form-popup__header">
            <h3 className="form-popup__title">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              className="form-popup__exit-btn"
            >
              <Icon icon={ExitIcon} widthPixelSizes={[13, 20, 20]} />
            </button>
          </div>
          {children}
          <Button disabled={isButtonDisabled} typeAttr="submit">
            {buttonText}
          </Button>
        </form>
      </div>
    </Popup>
  );
}

FormPopup.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
