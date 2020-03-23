import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
import PlayerCard from './components/PlayerCard';

it('Renders without crashing', () => {
	render(<App />);
});

test('Toggle loads dark mode', () => {
	const { getByTestId } = render(<App />);
	getByTestId('toggle-element');
});

test('Players are defined', () => {
	const players = <PlayerCard />;
	expect(players).toBeDefined();
	expect(players).not.toBeUndefined();
	expect(players).not.toBeFalsy();
});

test('Home page title works', () => {
	const { getByText } = render(<App />);
	getByText(/Women's World Cup Players/i);
});
