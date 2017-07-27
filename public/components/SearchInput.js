import React, { Component } from 'react';

class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onSearchChange(e.target.value);
    }

    render() {
        const searchText = this.props.searchText;
        return (

            <div className="form-group">
                <input  className="form-control input-lg" value={searchText} onChange={this.handleChange} placeholder="Search for Git User" />
            </div>

        );
    }
}

export default SearchInput;