import React, { Component } from 'react';

class SearchResults extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSearchInProgress: false,
            isSearchComplete: false,
        }
    }

    render() {
        const {gitUsers, searchStatus} = this.props.searchResults;
        if(!searchStatus) {
            return (
                <Message text='Enter user account name' spinner={false} />
            )
        }

        if(searchStatus == 'update') {
            return (
                <Message text='Please type at least 3 characters..' spinner={false} />
            )
        }

        if(searchStatus == 'request') {
            return (
                <Message text='Fetching users...' spinner={true} />
            )
        }

        return (
            <div>
                {
                    gitUsers.map(( user, i )=>{
                        <GitUserComponent user />
                    })
                }
            </div>
        );
    }
}

export default SearchResults;