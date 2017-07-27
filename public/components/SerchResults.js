import React, { Component } from 'react';
import GitUser from './GitUser.js';

class SearchResults extends Component {

    render() {
        const {gitHubUsers, searchStatus} = this.props;

        if( searchStatus === 'complete' ) {
            return (
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Login</th>
                            <th>Type</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gitHubUsers.map(( user, i ) => {
                            return <GitUser user={user} key={i} />
                        })}
                    </tbody>
                </table>
            )
        }
        return (
            <div className="search-results-empty">
                <img className="img-responsive" src="../../github-logo.jpeg" alt="" />
            </div>
        )
    }
}

export default SearchResults;