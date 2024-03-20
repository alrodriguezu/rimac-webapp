import React from 'react';
import { contactData } from 'core/constants/contact.constants';
import './header.scss';

const Header = () => (
  <div className="header">
    <div className="header__container">
      <div className="header__container__logo">
        <img src="src/assets/logo-header.png" alt="Rimac" />
      </div>
      <div className="header__container__message">
        <button className="header__container__message__text btn" type="button">
          ¡Compra por este medio!
        </button>
        <a
          className="header__container__message__number"
          href={`tel:${contactData.NUMBER_CONTACT}`}
        >
          <img
            className="header__container__message__number__icon"
            src="src\assets\phone.svg"
          ></img>{' '}
          {contactData.NUMBER_CONTACT}
        </a>
      </div>
    </div>
  </div>
);

export default Header;
