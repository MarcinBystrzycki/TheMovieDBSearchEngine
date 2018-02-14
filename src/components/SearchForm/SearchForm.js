import React from 'react';

const SearchForm = ({ handleChange, handleSearch, searchText, sortByName, sortDefault }) => {
	return (
		<div>
			<form className="SearchForm">
				<input type="text" onChange={handleChange} placeholder="search your movie" value={searchText}/>
				<button onClick={handleSearch}>
					<span>
						search
					</span>
				</button>
			</form>
			<div className="SortBy">
				<button onClick={sortDefault}>Default order</button>
				{' | '}
				<button onClick={sortByName}>Sort list by name</button>
			</div>
		</div>
	);
}

export default SearchForm;