import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const MainHeader = () => (
	<h1 className="MainHeader">
		<Link className="MainHeaderLink" to='/'>
			<span className="first">The</span>
			<span className="second">Movie</span>
			<span className="third">DB</span> 
			<FontAwesome className="fa fa-film" name="film" />
			<span className="fourth"> Search</span> 
			<span className="fifth"> Engine</span>
		</Link>
		<span className="PoweredBySubHead">
			powered by 
			<a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer"> TMDb API</a>
		</span>
	</h1>
);

export default MainHeader;