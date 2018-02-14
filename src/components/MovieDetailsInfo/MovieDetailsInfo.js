import React from 'react';
import MovieDetailsTable from '../MovieDetailsTable/MovieDetailsTable';
import MovieVotes from '../MovieVotes/MovieVotes';
import { Link } from 'react-router-dom';

const MovieDetailsInfo = ({ selectedMovie }) => {
	const src = selectedMovie.poster_path !== null ? `http://image.tmdb.org/t/p/w342${selectedMovie.poster_path}` : 'http://via.placeholder.com/250x342';
	const imdbUrl = 'http://www.imdb.com/title/' + selectedMovie.imdb_id;

	return (
		<div className="MovieDetailsWrapper">
			<div className="MovieDetailsImageWrapper">
				<div className="MovieDetailsImage">
					<img src={src} alt=""/>
					<div className="MovieVotesContainer">
						<MovieVotes movie={selectedMovie} />
						<p>
							<a className="IMDbLink" href={imdbUrl} target="_blank">
								check on <span>IMDb.com</span>
							</a>
						</p>
					</div>
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
			</div>
			<Link className="BackButton" to='/moviedb/'><span>back</span></Link>
		</div>
	);
};

export default MovieDetailsInfo;