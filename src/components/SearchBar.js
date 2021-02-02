import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

	// CHANGE HANDLER //
	const onInputChange = (e) => {
		setTerm(e.target.value);
	};

	// SUBMIT HANDLER //
	const onSubmit = (e) => {
		e.preventDefault();
		onFormSubmit(term);
		setTerm('');
	};

	return (
		<div className="search-bar ui segment">
			<form className="ui form" onSubmit={onSubmit}>
				<div className="field">
					<label>Video Search</label>
					<input type="text" value={term} onChange={onInputChange} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
