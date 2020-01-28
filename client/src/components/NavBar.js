import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='navbar'>
			<h1>Women's World Cup Player Rankings</h1>
			<h4>Based on worldwide Google searches dated June-July 2019</h4>
			<Link to='/'>View Listings</Link>
		</nav>
	);
};

export default NavBar;
