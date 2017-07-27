import React, { Component } from 'react';
import GitUser from './GitUser.js';

class SearchResults extends Component {

    render() {
        const {gitHubUsers, searchStatus} = this.props;

        if( searchStatus === 'complete' ) {
            return (
                <table>
                    <thead>
                        <th>#</th>
                        <th>Login</th>
                        <th>Type</th>
                        <th>Score</th>
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
            <div>
                <img src="../../github-logo.jpeg" alt="" />
            </div>
        )
    }
}

export default SearchResults;