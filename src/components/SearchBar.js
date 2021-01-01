import React, { Component } from 'react';

export class SearchBar extends Component {
	state = { term: '' };
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	};
	render() {
		return (
			<div className='ui segment'>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<label htmlFor='text'>YT video Search</label>
					<input
						type='text'
						name='text'
						value={this.state.term}
						onChange={(e) => this.setState({ term: e.target.value })}
					/>
				</form>
			</div>
		);
	}
}

export default SearchBar;
