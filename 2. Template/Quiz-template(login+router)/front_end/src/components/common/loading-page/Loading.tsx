import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { AppLoading } from 'store/common/Common';
import './Loading.scss';

function LoadingPage() {
  const setLoading = useSetRecoilState(AppLoading);

  useEffect(() => {
    setLoading(true);
    return setLoading(false);
  })

  return (
    <div className="loading-page">
      <Spin tip="Loading..." size="large"></Spin>
    </div>
  );
}

export default LoadingPage;