import React, { Component } from 'react';
import MovieDetailsInfo from '../MovieDetailsInfo/MovieDetailsInfo';

class MovieDetails extends Component {
	constructor() {
		super();
		this.state = {
			selectedMovie: {
				release_date: '    '
			}
		};
	}

	componentDidMount() {
		const API_KEY = 'de2d1285a62e2c7e6a265f823daf2d06';
		const url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`;

		fetch(url)
			.then(resp => resp.json())
			.then(data => this.setState({ selectedMovie: data }))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="MovieDetails">
				<MovieDetailsInfo selectedMovie={this.state.selectedMovie} />
			}
			</div>
		);
	}
}

export default MovieDetails;