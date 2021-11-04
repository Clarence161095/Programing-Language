/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Dashboard.scss';
import Header from './header/Header';
import LeftMenu from './left-menu/LeftMenu';
import OptionMenu from './option-menu/OptionMenu';
import RightMenu from './right-menu/RightMenu';

Dashboard.propTypes = {

};

function Dashboard(props) {
  return (
    <div className="dashboard">
      <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
        <Header />
        <OptionMenu />
        <LeftMenu />
        <RightMenu />
      </div>
    </div>
  );
}

export default Dashboard;