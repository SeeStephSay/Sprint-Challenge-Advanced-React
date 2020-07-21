import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Toggle loads dark mode', () => {
  const {getByTestID} = render(<App />);
  getByTestID('toggle-element');
});

test('Home page title works', () => {
  const { getByText } = render(<App />);
  getByText(/Women's World Cup Players/i);
});

test('Players are defined', () => {
  const players = <PlayerCard />;
  expect(players).toBeDefined();
  expect(players).not.toBeUndefined();
  expect(players).not.toBeFalsy();
});
