import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import ContentTable from './components/ContentTable';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test('Toggle loads dark mode', () => {
	const { getByTestId } = render(<App />);
	getByTestId('toggle-element');
});

test('Players are defined', () => {
	const players = <ContentTable />;
	expect(players).toBeDefined();
	expect(players).not.toBeUndefined();
	expect(players).not.toBeFalsy;
});
