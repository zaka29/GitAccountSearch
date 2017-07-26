// read: https://gist.github.com/caspyin/2288960
import React, { Component } from 'react';
import axios from 'axios';
import * as requests from './requests.js';
import SearchInput from './components/SearchInput.js'

export default class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            skills: [],
            interests: [],
            richestPerson: '',
            isLoaded: false,
        };
    }

    // Search Text here
    componentDidMount() {
    	axios.all([requests.getAllPeople(), requests.getPeopleSkills(), requests.getInterests(), requests.getRichest()])
    		.then(axios.spread((people, skills, interests, richest) => {
				this.setState({
    				people: people.data,
    				skills: skills.data,
    				interests: interests.data,
    				richestPerson: richest.data.richestPerson,
    				isLoaded: true,
    			});
            }));
    }

    render() {
    	const { isLoaded } = this.state;

        if (!isLoaded) {
        	return (
        		<h4>Loading...</h4>
    		)
        }

        return ( 
            <PeopleTable {...this.state} />
        )
    }
}