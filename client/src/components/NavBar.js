import React from 'react';
import { Link } from 'react-router-dom';
import toggleDarkMode from '../hooks/ToggleDarkMode.js';

const NavBar = () => {
	const [ darkMode, setDarkMode ] = toggleDarkMode();

	return (
		<nav className='navbar'>
			<h1>Women's World Cup Player Rankings</h1>
			<h3>Based on worldwide Google searches dated June-July 2019</h3>
			{/* <Link to='/'>View Rankings</Link> */}

			<div className='dark-mode__toggle' data-testid='toggle-element'>
				<div onClick={setDarkMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
			</div>
		</nav>
	);
};

export default NavBar;
