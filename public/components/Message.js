import React, { Component } from 'react';
import Loader from './Loader.js';
const Message = ({searchStatus}) => {

    if( searchStatus === 'start' ) {
        return  <div className="alert alert-info">Start typing to search..</div>
    }

    if(searchStatus === 'update'){
        return <div className="alert alert-info">Please type at least 3 characters..  </div>
    }

    if(searchStatus === 'request'){
        return <div className="alert alert-info">Fetching users... <Loader /></div>
    }

    if(searchStatus === 'complete'){
        return <div className="alert alert-info">Done :)</div>
    }
};

export default Message;
