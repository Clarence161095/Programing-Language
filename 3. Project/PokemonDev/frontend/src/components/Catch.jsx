/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BattleControl, BattleScreen } from './Battle';

const Catch = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<BattleScreen />
			<BattleControl />
		</div>
	);
};

export default Catch;
