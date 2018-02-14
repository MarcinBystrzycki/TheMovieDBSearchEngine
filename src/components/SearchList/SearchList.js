import React from 'react';
import SearchListItem from '../SearchListItem/SearchListItem';

const SearchList = ({ data, previousPage, nextPage, page }) => {

	function button(direct, str) {
		if (page > 0 && page <= data.total_pages) {
			return <button onClick={direct}>{str}</button>;
		}
	}

	return (
		<ul className="SearchList">
			{data.results.map(movie => 
				<SearchListItem key={movie.id} movie={movie}/>
			)}

			<div className="PageControllers">
				{button(previousPage, '<<')}
				<button>{page}</button>
				{button(nextPage, '>>')}
			</div>
		</ul>
	);
};

export default SearchList;