import React, { Component } from 'react';
import SearchList from '../SearchList/SearchList';
import SearchForm from '../SearchForm/SearchForm';

class SearchEngine extends Component {
	constructor() {
		super();
		this.state = {
			searchText: localStorage.getItem('searchText') !== null ? localStorage.getItem('searchText') : '',
			data: {
				results: [],
				total_pages: 1
			},
			actualPage: 1,
		};
	}

	handleChange = (e) => {
		const searchText = e.target.value;

		this.setState({ searchText });
	}

	handleSearch(page) {
		const API_KEY = "de2d1285a62e2c7e6a265f823daf2d06";
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page || 1}&include_adult=false&query=`;
		const QUERY = encodeURI(this.state.searchText);

		if (this.state.searchText.length > 1) {
			fetch(url + QUERY.trim())
				.then(resp => resp.json())
				.then(data => this.setState({ data }))
				.catch(err => console.log(err));
		}
	}

	handlePage(direction) {

		let page = this.state.actualPage;

		if (direction === 'next') {
			page = page !== this.state.data.total_pages ? page + 1 : page;

			this.setState({ actualPage: page });
		} else {
			page = page !== 1 ? page - 1 : page;

			this.setState({ actualPage: page });
		}

		this.handleSearch(page);
	}

	sortByName() {
		this.setState({
			data: {
				...this.state.data,
				results: this.state.data.results.sort((a, b) => a.title.localeCompare(b.title))
			}
		})
	}

	sortDefault() {
		this.handleSearch(this.state.actualPage);
	}

	componentDidMount() {
		this.handleSearch();
		this.setState({ searchText: localStorage.getItem('searchText')});
	}

	render() {
		return (
			<div className="SearchEngine">
				<div className="SearchContainer">
					<SearchForm 
						handleChange={this.handleChange}
						handleSearch={(e) => {
							this.handleSearch();
							localStorage.setItem('searchText', this.state.searchText);
						}}
						searchText={this.state.searchText}
						sortByName={() => this.sortByName()}
						sortDefault={() => this.sortDefault()}
					/>
					<SearchList 
						data={this.state.data} 
						previousPage={() => this.handlePage('previous')} 
						nextPage={() => this.handlePage('next')} 
						page={this.state.actualPage}
					/>
				</div>
			</div>
		);
	}
};

export default SearchEngine;