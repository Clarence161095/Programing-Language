/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NotFound.scss';

NotFound.propTypes = {};

function NotFound() {
  return (
    <div className="not-found">
      <div className="face">
        <div className="band">
          <div className="red"></div>
          <div className="white"></div>
          <div className="blue"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </div>

      <h1>Oops! Something went wrong! Page not found!</h1>
      <div className="btn" onClick={() => window.location.href = '/dashboard'}>Return to Home</div>
    </div>
  );
}

export default NotFound;