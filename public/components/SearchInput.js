import React, { Component } from 'react';

class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log('entry - ', e.target.value)
        console.log('entry - length', e.target.value.length)

        this.props.onSearchChange(e.target.value);
    }

    render() {
        const searchText = this.props.searchText;
        return (
            <fieldset>
                <legend>Search for Git User</legend>
                <input value={searchText}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default SearchInput;