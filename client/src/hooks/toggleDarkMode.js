import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const toggleDarkMode = (initialValue) => {
	const [ darkMode, setDarkMode ] = useLocalStorage('dark-mode', initialValue);

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

export default toggleDarkMode;
