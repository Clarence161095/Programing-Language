import React from 'react';
import {
	Container,
	Nav,
	Navbar,
	NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';

NavbarReactstrap.propTypes = {};

function NavbarReactstrap(props) {
	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			bg='dark'
			variant='dark'>
			<Container>
				<Navbar.Brand href='/'>UI</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<NavDropdown
							title='Organisms'
							id='collasible-nav-dropdown'>
							<NavDropdown.Item>
								<Link
									className='router-link'
									to='/HookForm'>
									HookForm
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarReactstrap;
