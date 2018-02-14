import React from 'react';
import { Link } from 'react-router-dom';
import MovieVotes from '../MovieVotes/MovieVotes';

const SearchListItem = ({ movie }) => {
	const src = movie.poster_path !== null ? `http://image.tmdb.org/t/p/w185${movie.poster_path}` : 'http://via.placeholder.com/185x278';

	return (
		<li className="SearchListItem">
			<Link className="MovieDetailsLink" to={'/details/' + movie.id}> 
				<div className="PosterWrapper">
					<img className="PosterW185" src={src} alt="#" />
				</div>
				<h4 className="MovieTitle">
					{movie.title}
					<span>
						{` (${movie.release_date.slice(0, 4)}) `}
					</span>
				</h4>
				<MovieVotes movie={movie} />
			</Link>
		</li>
	);
};

export default SearchListItem;