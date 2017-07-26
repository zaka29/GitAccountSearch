import React, { Component } from 'react';
import Message from './Message.js';
import GitUser from './GitUser.js';

class SearchResults extends Component {

    render() {
        const {gitHubUsers, searchStatus} = this.props;

        if( searchStatus === 'start' ) {
            return  <Message text='Enter user account name' spinner={false} />
        }

        if(searchStatus === 'update'){
            return <Message text='Please type at least 3 characters..' spinner={false} />
        }

        if(searchStatus === 'request'){
            return <Message text='Fetching users...' spinner={true} />
        }

        if( searchStatus === 'complete' ) {
            return (
                <div>
                    <Message text={`Displayed results: ${gitHubUsers.length}`} spinner={false} />
                    {gitHubUsers.map(( user, i ) => {
                        return <GitUser user={user} key={i} />
                    })}
                </div>
            )
        }
    }
}

export default SearchResults;