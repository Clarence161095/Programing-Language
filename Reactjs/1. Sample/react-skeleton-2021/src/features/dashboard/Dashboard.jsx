/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import SampleApi from 'api/SampleApi';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import LocalStorageService from 'utils/LocalStorageService';
import './Dashboard.scss'

function Dashboard() {
  const history = useHistory()

  // Get sample API #TODO
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 2,
        };
        const response = await SampleApi.getAll(params);
        console.log('Dashboard ~ Get sample API :>> ', response);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };

    fetchProductList();
  }, []);

  function logout() {
    LocalStorageService.removeUser()
    window.location.reload();
  }

  return (
    <div className="dashboard">
      <div className="container">
        <h1 className="title">Dashboard</h1>
        <ul>
          <li className="dropdown">
            <input type="checkbox" />
            <a href="#" data-toggle="dropdown">Menu</a>
            <ul className="dropdown-menu">
              <li><a href="#" onClick={() => history.push('/login')}>/login</a></li>
              <li><a href="#" onClick={() => history.push('/dashboard')}>/dashboard</a></li>
              <li><a href="#" onClick={() => history.push('/NotFound')}>/NotFound</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <input type="checkbox" />
            <a href="#" data-toggle="dropdown">Features</a>
            <ul className="dropdown-menu">
              <li><a href="#" onClick={() => history.push('/dashboard')}>Dashboard</a></li>
              <li><a href="#" onClick={() => history.push('/login')}>Login</a></li>
              <li><a href="#" onClick={logout}>Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;