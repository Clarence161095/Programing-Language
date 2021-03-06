import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LoadingPage from './common/loading-page/LoadingPage';
import './index.css';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <RecoilRoot>
    <React.Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
  </RecoilRoot>,
  document.getElementById('root'),
);
