/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

Analytics.propTypes = {

};

function Analytics(props) {
  return (
    <div className="analytics">
      <div>
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">

          {/*HEADER START*/}
          <div className="app-header header-shadow">

            <div className="app-header__logo">
              <div className="logo-src" />
              <div className="header__pane ml-auto">
                <div>
                  <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="app-header__mobile-menu">
              <div>
                <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>

            <div className="app-header__menu">
              <span>
                <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                  <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6" />
                  </span>
                </button>
              </span>
            </div>

            <div className="app-header__content">
              <div className="app-header-left">
                <div className="search-wrapper">
                  <div className="input-holder">
                    <input type="text" className="search-input" placeholder="Type to search" />
                    <button className="search-icon"><span /></button>
                  </div>
                  <button className="close" />
                </div>
                <ul className="header-megamenu nav">
                  <li className="dropdown nav-item">
                    <a aria-haspopup="true" data-toggle="dropdown" className="nav-link" aria-expanded="false">
                      <i className="nav-link-icon pe-7s-settings" /> Projects
                      <i className="fa fa-angle-down ml-2 opacity-5" />
                    </a>
                    <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu-rounded dropdown-menu-lg rm-pointers dropdown-menu">
                      <div className="dropdown-menu-header">
                        <div className="dropdown-menu-header-inner bg-success">
                          <div className="menu-header-image opacity-1" style={{ backgroundImage: 'url("../assets/images/dropdown-header/abstract3.jpg")' }} />
                          <div className="menu-header-content text-left">
                            <h5 className="menu-header-title">Overview</h5>
                            <h6 className="menu-header-subtitle">Unlimited options</h6>
                            <div className="menu-header-btn-pane">
                              <button className="mr-2 btn btn-dark btn-sm">Settings</button>
                              <button className="btn-icon btn-icon-only btn btn-warning btn-sm">
                                <i className="pe-7s-config btn-icon-wrapper" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="button" tabIndex={0} className="dropdown-item"><i className="dropdown-icon lnr-file-empty"> </i>Icon Design</button>
                      <button type="button" tabIndex={0} className="dropdown-item"><i className="dropdown-icon lnr-file-empty"> </i>Frontend Dev</button>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="app-header-right">
                <div className="header-dots">
                  <div className="dropdown">
                    <button type="button" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false" className="p-0 btn btn-link dd-chart-btn">
                      <span className="icon-wrapper icon-wrapper-alt rounded-circle">
                        <span className="icon-wrapper-bg bg-success" />
                        <i className="icon text-success ion-ios-analytics" />
                      </span>
                    </button>
                    <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu dropdown-menu-right">
                      <div className="dropdown-menu-header">
                        <div className="dropdown-menu-header-inner bg-premium-dark">
                          <div className="menu-header-image" style={{ backgroundImage: 'url("../assets/images/dropdown-header/abstract4.jpg")' }} />
                          <div className="menu-header-content text-white">
                            <h5 className="menu-header-title">
                              menu-header-title
                            </h5>
                            <h6 className="menu-header-subtitle">
                              menu-header-subtitle
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="widget-chart">
                        <div className="widget-chart-content">
                          <div className="icon-wrapper rounded-circle">
                            <div className="icon-wrapper-bg opacity-9 bg-focus">
                            </div>
                            <i className="lnr-users text-white">
                            </i>
                          </div>
                          <div className="widget-numbers">
                            <span>widget-numbers</span>
                          </div>
                          <div className="widget-subheading pt-2">
                            widget-subheadin
                          </div>
                          <div className="widget-description text-danger">
                            <span className="pr-1">
                              <span>widget-description</span>
                            </span>
                            <i className="fa fa-arrow-left" />
                          </div>
                        </div>
                        <div className="widget-chart-wrapper">
                          <div id="dashboard-sparkline-carousel-3-pop" />
                        </div>
                      </div>
                      <ul className="nav flex-column">
                        <li className="nav-item-divider mt-0 nav-item">
                        </li>
                        <li className="nav-item-btn text-center nav-item">
                          <button className="btn-shine btn-wide btn-pill btn btn-warning btn-sm">
                            <i className="fa fa-cog fa-spin mr-2">
                            </i>
                            nav-item-bt
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="header-btn-lg pr-0">
                  <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left">
                        <div className="btn-group">
                          <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                            <img width={42} className="rounded-circle" src="../assets/images/avatars/1.jpg" alt="" />
                            <i className="fa fa-angle-down ml-2 opacity-8" />
                          </a>
                          <div tabIndex={-1} role="menu" aria-hidden="true" className="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                            <div className="dropdown-menu-header">
                              <div className="dropdown-menu-header-inner bg-info">
                                <div className="menu-header-image opacity-2" style={{ backgroundImage: 'url("../assets/images/dropdown-header/city3.jpg")' }} />
                                <div className="menu-header-content text-left">
                                  <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                      <div className="widget-content-left mr-3">
                                        <img width={42} className="rounded-circle" src="../assets/images/avatars/1.jpg" alt="" />
                                      </div>
                                      <div className="widget-content-left">
                                        <div className="widget-heading">Alina Mcloughlin
                                        </div>
                                        <div className="widget-subheading opacity-8">A short profile description
                                        </div>
                                      </div>
                                      <div className="widget-content-right mr-2">
                                        <button className="btn-pill btn-shadow btn-shine btn btn-focus">Logout
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="scroll-area-xs" style={{ height: '150px' }}>
                              <div className="scrollbar-container ps">
                                <div className="scrollbar-container-content">
                                  Content
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget-content-left  ml-3 header-user-info">
                        <div className="widget-heading">
                          Alina Mclourd
                        </div>
                        <div className="widget-subheading">
                          VP People Manager
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-btn-lg">
                  <button type="button" className="hamburger hamburger--elastic open-right-drawer">
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*HEADER END*/}

          {/*THEME OPTIONS START*/}
          <div className="ui-theme-settings">
            <button type="button" id="TooltipDemo" className="btn-open-options btn btn-warning">
              <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
            </button>
            <div className="theme-settings__inner">
              <div className="scrollbar-container">
                <div className="theme-settings__options-wrapper">
                  <h3 className="themeoptions-heading">Layout Options
                  </h3>
                  <div className="themeoptions-content">
                    Content Options
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*THEME OPTIONS END*/}


          {/*RIGHT MENU START*/}
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
                            </i>Analytics
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
          {/*RIGHT MENU END*/}
        </div>

        {/*DRAWER START*/}
        <div className="app-drawer-wrapper">
          <div className="drawer-nav-btn">
            <button type="button" className="hamburger hamburger--elastic is-active">
              <span className="hamburger-box"><span className="hamburger-inner" /></span></button>
          </div>
          <div className="drawer-content-wrapper">
            <div className="scrollbar-container">
              <h3 className="drawer-heading">Right bar</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Analytics;