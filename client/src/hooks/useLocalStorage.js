import React, { useState } from 'react';

// Set up state property
// Capture the values
// If local data, use that, else use initial data
// Update localStorage when needed
// Parse data from localStorage and stringify new data getting stored

const useLocalStorage = (key, initialValue) => {
	const [ storedValue, setStoredValue ] = useState(() => {
		// What is called from the cb will be the storedValue
		const item = window.localStorage.getItem(key);

		{
			/* If the item is true, then return the item parsed with JSON. Else, return the initial value. 
    return expression ? true expression : false expression */
		}

		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = (value) => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};
	return [ storedValue, setValue ];
};

export default useLocalStorage;
