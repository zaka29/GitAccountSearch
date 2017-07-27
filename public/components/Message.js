import React, { Component } from 'react';
import Loader from './Loader.js';
const Message = ({searchStatus}) => {

    if( searchStatus === 'start' ) {
        return  <div>Start typing to search..</div>
    }

    if(searchStatus === 'update'){
        return <div>Please type at least 3 characters..  </div>
    }

    if(searchStatus === 'request'){
        return <div>Fetching users...</div>
    }

    if(searchStatus === 'complete'){
        return <div>Done :)</div>
    }
};

export default Message;
