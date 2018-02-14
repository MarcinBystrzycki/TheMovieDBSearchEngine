import React from 'react';
import SearchEngine from '../SearchEngine/SearchEngine';
import MovieDetails from '../MovieDetails/MovieDetails';
import MainHeader from '../MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className="App">
				<MainHeader />
				<Route exact path="/moviedb/" component={SearchEngine} />
				<Route path="/moviedb/details/:id" component={MovieDetails} />
				<Footer />
			</div>
		</Router>
	);
};

export default App;
