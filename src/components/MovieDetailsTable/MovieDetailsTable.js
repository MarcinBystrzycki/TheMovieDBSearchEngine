import React from 'react';
import uuid from 'uuid';

const MovieDetailsTable = ({ selectedMovie }) => {
	return (
		<div className="MovieDetailsTableWrapper">
			<table className="MovieDetailsTable">
				<tbody>
					<tr>
						<td>Director:</td>
						<td>
							{
								selectedMovie.credits != null 
									? 
									selectedMovie.credits.crew
										.filter(person => person.job === 'Director')
										.map(director => <span className="SpanBlue" key={uuid.v4()}>{director.name}</span>)
									: 
									null
							}
						</td>
					</tr>
					<tr>
						<td>Screenplay:</td>
						<td>
							{
								selectedMovie.credits != null 
									? 
									selectedMovie.credits.crew
										.filter(person => person.job === 'Writer' || person.job === 'Screenplay')
										.map(writer => <span className="SpanGreen" key={uuid.v4()}>{writer.name}</span>)
									: 
									null
							}
						</td>
					</tr>
					<tr>
						<td>Producers:</td>
						<td>
							{
								selectedMovie.credits != null 
									? 
									selectedMovie.credits.crew
										.filter(person => person.job === 'Producer')
										.map(producer => <span className="SpanRed" key={uuid.v4()}>{producer.name}</span>)
									: 
									null
							}
						</td>
					</tr>
					<tr>
						<td>Cast:</td>
						<td>
							{
								selectedMovie.credits != null 
									? 
									selectedMovie.credits.cast.map(actor => <span className="SpanBlue" key={uuid.v4()}>{actor.name}</span>)
									: 
									null
							}
						</td>
					</tr>
					<tr>
						<td>Genres: </td>
						<td>
							{
								selectedMovie.genres != null 
									?
									selectedMovie.genres.map(genre => <span className="SpanGreen" key={uuid.v4()}>{genre.name}</span>) 
									: 
									null
							}
						</td>
					</tr>
					<tr>
						<td>Production countries:</td>
						<td>
							{
								selectedMovie.production_countries != null 
									? 
									selectedMovie.production_countries.map(country => <span className="SpanRed" key={uuid.v4()}>{country.name}</span>) 
									: 
									null
							}
						</td>
					</tr>
					<tr>
						<td>Production companies:</td>
						<td>
							{
								selectedMovie.production_companies != null 
									? 
									selectedMovie.production_companies.map(company => <span className="SpanBlue" key={uuid.v4()}>{company.name}</span>) 
									: 
									null
							}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default MovieDetailsTable;