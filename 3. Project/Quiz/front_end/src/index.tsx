import 'antd/dist/antd.css';
import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import './index.css';

ReactDOM.render(
  <RecoilRoot>
      <App />
  </RecoilRoot>
  ,
  document.getElementById('root')
);
