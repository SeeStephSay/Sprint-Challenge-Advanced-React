import React, { useEffect } from 'react';
import UseLocalStorage from './UseLocalStorage';

const ToggleDarkMode = (initialValue) => {
	const [ darkMode, setDarkMode ] = UseLocalStorage('dark-mode', initialValue);

	useEffect(
		() => {
			return darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
		},
		[ darkMode ],
	);
	// 		if (darkMode) {
	// 			document.body.classList.add('dark-mode');
	// 		} else {
	// 			document.body.classList.remove('dark-mode');
	// 		}
	// 	},
	// 	[ darkMode ],
	// );
	return [ darkMode, setDarkMode ];
};

export default ToggleDarkMode;
