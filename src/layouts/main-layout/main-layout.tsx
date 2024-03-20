import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../components/header';
import { IState } from '../../core/store/reducers';
import './main-layout.scss';

export interface IMainLayoutProps {
  maxWidthEnabled?: boolean;
  children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children, maxWidthEnabled = false }) => {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <Header />
      </header>
      <div className="main-layout__container">
        <div id="main-layout" className="main-layout__content-wrapper">
          <div
            className={`main-layout__content ${
              maxWidthEnabled ? 'main-layout__content--max-content' : ''
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
