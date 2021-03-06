import React, { Component } from 'react';
import * as requests from './requests.js';
import SearchInput from './components/SearchInput.js'
import SearchResults from './components/SerchResults.js'
import Message from './components/Message.js';

export default class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            gitHubUsers: [],
            searchStatus: 'start',
            searchText: '',
        };
    }

    handleSearchChange(text) {
        this.setState({
            searchText: text,
        });

        if(text.length === 0){
            this.setState({ gitHubUsers: [], searchStatus: 'start' })
        }

        if(text.length < 3 && text.length > 0){
            this.setState({  searchStatus: 'update' })
        }

        if(text.length >= 3) {
            this.setState({ searchStatus: 'request' });

            requests.getGitHubUsersByName(text)
                .then((response) => {
                    this.setState({
                        gitHubUsers: response.data.items,
                        searchStatus: 'complete',
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    render() {
    	const { searchText, gitHubUsers, searchStatus } = this.state;

        return ( 
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <SearchInput searchText={searchText} onSearchChange={this.handleSearchChange.bind(this)} />
                    </div>
                    <div className="panel-body">
                        <Message searchStatus={searchStatus}/>
                    </div>
                    <SearchResults gitHubUsers={gitHubUsers} searchStatus={searchStatus} />
                </div>
            </div>
        )
    }
}