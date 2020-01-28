import React from 'react';
import { Link } from 'react-router-dom';
import { toggleDarkMode } from '../hooks/toggleDarkMode';

const NavBar = () => {
	const [ darkMode, setDarkMode ] = toggleDarkMode();

	return (
		<nav className='navbar'>
			<h1>Women's World Cup Player Rankings</h1>
			<h4>Based on worldwide Google searches dated June-July 2019</h4>
			<Link to='/'>View Rankings</Link>

			<div className='dark-mode__toggle'>
				<div onClick={setDarkMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
			</div>
		</nav>
	);
};

export default NavBar;
