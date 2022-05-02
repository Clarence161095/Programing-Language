import User from 'features/admin/user/User';
import Home from 'features/home/Home';
import CreateQuiz from 'features/quiz/create-quiz/CreateQuiz';
import JoinRoom from 'features/room/join-room/JoinRoom';
import MyRoom from 'features/room/my-room/MyRoom';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Role } from 'store/UserState';

function DashboardRouter() {
	const role = useRecoilValue(Role);

	if (role === 'admin') {
		return (
			<Routes>
				<Route path='/user' element={<User />} />
				<Route path='/my_room' element={<MyRoom />} />
				<Route path='/join_room' element={<JoinRoom />} />
				<Route path='/create_quiz' element={<CreateQuiz />} />
				<Route path='*' element={<Home />} />
			</Routes>
		);
	} else if (role === 'plus') {
		return (
			<Routes>
				<Route path='/my_room' element={<MyRoom />} />
				<Route path='/join_room' element={<JoinRoom />} />
				<Route path='/create_quiz' element={<CreateQuiz />} />
				<Route path='*' element={<Home />} />
			</Routes>
		);
	} else {
		return (
			<Routes>
				<Route path='/join_room' element={<JoinRoom />} />
				<Route path='*' element={<Home />} />
			</Routes>
		);
	}
}

export default DashboardRouter;
