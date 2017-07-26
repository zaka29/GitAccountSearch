// ­ avatar_url : The Github user avatar (rendered as an image)
// ­ login: The username of the github user
// ­ type: The type of user.
// ­ score: A decimal value representing the accuracy of the result against the search term.

import React, { Component } from 'react';

const GitUser = ({ user }) => {

    return (
        <div className="user-item">
               <img src={user.avatar_url} alt=""/> { user.login } - Type: {user.type} - Score: {user.score}
        </div>
    )
};

export default GitUser;
