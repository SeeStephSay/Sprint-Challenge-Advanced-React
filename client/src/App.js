import React from 'react';
import axios from 'axios';
import './App.css';
import ContentTable from './component/ContentTable';
import NavBar from './component/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
	state = {
		players : [],
	};

	componentDidMount() {
		axios
			.get(`http://localhost:5000/api/players`)
			.then((response) => {
				console.log(typeof response.data);
				const result = response.data.map((obj) => {
					return {
						name     : obj.name,
						country  : obj.country,
						searches : obj.searches,
					};
				});
				this.setState({
					players : result,
				});
			})
			.catch((error) => {
				console.log(error, 'No data');
			});
	}

	render() {
		return (
			<div className='app'>
				<Router>
					<NavBar />

					<Route exact path='/' render={() => <ContentTable players={this.state.players} />} />
				</Router>
			</div>
		);
	}
}

export default App;
