/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function LeftMenu(props) {
  return (
    <div className="left-menu">
      <div className="app-main">
        <div className="app-sidebar sidebar-shadow">
          <div className="scrollbar-sidebar">
            <div className="app-sidebar__inner">
              <ul className="vertical-nav-menu">
                <li className="app-sidebar__heading">Menu</li>
                <li className="mm-active">
                  <a href="#">
                    <i className="metismenu-icon pe-7s-rocket" /> Dashboards
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                  </a>
                  <ul>
                    <li>
                      <a href="analytics.html" className="mm-active">
                        <i className="metismenu-icon">
                        </i>Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="commerce.html">
                        <i className="metismenu-icon">
                        </i>Commerce
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="metismenu-icon pe-7s-browser" /> Pages
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                  </a>
                  <ul>
                    <li>
                      <a href="login.html">
                        <i className="metismenu-icon" /> Login
                      </a>
                    </li>
                    <li>
                      <a href="login-boxed.html">
                        <i className="metismenu-icon">
                        </i>Login Boxed
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="app-main__outer">
          <div className="app-main__inner">
            Content here
          </div>
          <div className="app-wrapper-footer">
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;