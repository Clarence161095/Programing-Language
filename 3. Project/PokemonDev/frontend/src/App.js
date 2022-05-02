import { Button } from 'antd';
import Home from 'components/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import { Battle } from './components/Battle';
import Catch from './components/Catch';

function App() {
	let navigate = useNavigate();

	return (
		<div className='cpn_app'>
			<div className='my_container'>
				<Routes>
					<Route path='*' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/catch' element={<Catch />} />
					<Route path='/battle' element={<Battle />} />
				</Routes>
				<div className='bottom_menu'>
					<Button onClick={() => navigate(`/home`)}>Home</Button>
					<Button onClick={() => navigate(`/catch`)}>Catch</Button>
					<Button onClick={() => navigate(`/battle`)}>battle</Button>
					<Button onClick={() => navigate(`/gym`)}>Gym</Button>
					<Button onClick={() => navigate(`/gym`)}>Team</Button>
				</div>
			</div>
		</div>
	);
}

export default App;
