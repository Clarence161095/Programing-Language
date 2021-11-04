import React from 'react';

function RightMenu(props) {
  return (
    <div className="right-menu">
      <div className="app-drawer-wrapper">
        <div className="drawer-nav-btn">
          <button type="button" className="hamburger hamburger--elastic is-active">
            <span className="hamburger-box"><span className="hamburger-inner" /></span></button>
        </div>
        <div className="drawer-content-wrapper">
          <div className="scrollbar-container">
            <h3 className="drawer-heading">RIGHT DRAWER</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightMenu;