/* eslint-disable no-dupe-keys */
import { Spin } from 'antd';
import React from 'react';

const LoadingPage = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'nowrap',
				justifyContent: 'center',
				alignItems: 'center',
				alignContent: 'center',
				background: '#5c258d',
				background: `-webkit-linear-gradient(to right, #4389a2, #5c258d)`,
				background: `linear-gradient(to right, #4389a2, #5c258d)`,
				minHeight: '100vh',
				transform: `scale(1.5, 1.5)`,
			}}>
			<Spin tip='Loading...' size='large'></Spin>
		</div>
	);
};

export default LoadingPage;
