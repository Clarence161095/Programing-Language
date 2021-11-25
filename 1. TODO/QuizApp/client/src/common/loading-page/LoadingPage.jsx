import { Spin } from 'antd';
import React from 'react';
import './LoadingPage.scss';

const LoadingPage = () => {
  return (
    <div className='loading_page'>
      <Spin tip='Loading...' size='large'></Spin>
    </div>
  );
};

export default LoadingPage;
