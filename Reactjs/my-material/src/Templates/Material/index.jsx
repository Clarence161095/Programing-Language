import React from 'react';
import { Container } from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import HookForm from '../../Organisms/Hook-Form';
import NavbarReactstrap from '../../Organisms/Navbar-Reactstrap';
import './style.scss';

Material.propTypes = {};

function Material(props) {
	return (
		<Router>
			<NavbarReactstrap />
			<Container className='component'>
				<Switch>
					<Route
						path='/'
						exact
						component={() => 'Hello World!'}
					/>
					<Route
						path='/HookForm'
						component={HookForm}
					/>
				</Switch>
			</Container>
		</Router>
	);
}

export default Material;
