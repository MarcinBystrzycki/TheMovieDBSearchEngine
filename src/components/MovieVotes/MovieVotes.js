import React from 'react';
import FontAwesome from 'react-fontawesome';

const MovieVotes = ({ movie }) => {
	return (
		<span className="MovieVotes">
			<FontAwesome className="fa fa-star" name="star" />
			<strong>{movie.vote_average}</strong>
			
			<small>
				{` /10 (${movie.vote_count})`}
			</small>
		</span>
	);
};

export default MovieVotes;