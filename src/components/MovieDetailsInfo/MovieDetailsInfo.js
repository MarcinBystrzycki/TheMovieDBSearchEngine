import React from 'react';
import MovieDetailsTable from '../MovieDetailsTable/MovieDetailsTable';
import MovieVotes from '../MovieVotes/MovieVotes';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const MovieDetailsInfo = ({ selectedMovie }) => {
	const src = selectedMovie.poster_path !== null ? `http://image.tmdb.org/t/p/w342${selectedMovie.poster_path}` : 'http://via.placeholder.com/250x342';
	const imdbUrl = 'http://www.imdb.com/title/' + selectedMovie.imdb_id;

	return (
		<div className="MovieDetailsWrapper">
			<MovieVotes movie={selectedMovie} />
			<div className="MovieDetailsImageWrapper">
				<div className="MovieDetailsImage">
					<img src={src} alt=""/>
				</div>
			</div>
			<div className="MovieDetailsInfo">
				<h1 className="MovieDetailsTitle">
					{selectedMovie.title}
					<span className="MovieDetailsDate">
						{selectedMovie.release_date != null ? ' (' + selectedMovie.release_date.slice(0, 4) + ')' : null}
					</span>
				</h1>
				<h3 className="MovieDetailsOriginalTitle">
					{'"' +selectedMovie.original_title + '"'}
					<span>{'(original title)'}</span>
				</h3>
				<h3 className="MovieDetailsRuntime">
					{selectedMovie.runtime + ' min'}
				</h3>
				<p className="MovieDetailsOverview">
					{selectedMovie.overview}
				</p>
				<MovieDetailsTable selectedMovie={selectedMovie} />
				<a className="IMDbLink" href={imdbUrl} target="_blank">
					<FontAwesome className="fab fa-imdb" name="imdb" size="3x"/>
				</a>
			</div>
			<Link className="BackButton" to='/'><span>back</span></Link>
		</div>
	);
};

export default MovieDetailsInfo;