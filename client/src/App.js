import React from 'react';
import NavBar from './components/NavBar';
import PlayerCard from './components/PlayerCard';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players : [],
		};
	}

	fetchPlayers = () => {
		fetch('http://localhost:5000/api/players')
			.then((response) => {
				return response.json();
			})
			.then((players) => this.setState({ players: players }))
			.catch((error) => {
				console.log('Server not responding', error);
			});
	};

	componentDidMount() {
		this.fetchPlayers();
	}

	render() {
		return (
			<div className='App'>
				<NavBar />
				<div className='cardsContainer'>
					{this.state.players.map((player) => (
						<PlayerCard key={player.id} name={player.name} country={player.country} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
