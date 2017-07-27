import React, { Component } from 'react';
import Loader from './Loader.js';
const Message = ({searchStatus}) => {

    if( searchStatus === 'start' ) {
        return  <div>Enter user account name</div>
    }

    if(searchStatus === 'update'){
        return <div>Please type at least 3 characters..  </div>
    }

    if(searchStatus === 'request'){
        return <div>Fetching users...<Loader /></div>
    }

    if(searchStatus === 'request'){
        return <div>Done :)</div>
    }
};

export default Message;
