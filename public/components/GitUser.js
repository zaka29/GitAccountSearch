import React, { Component } from 'react';

const GitUser = ({ user }) => {

    return (
        <tr>
            <td>
                <img className="user-avatar" src={user.avatar_url} alt=""/>
            </td>
            <td>
                { user.login }
            </td>
            <td>
                {user.type}
            </td>
            <td>
                {user.score}
            </td>
        </tr>
    )
};

export default GitUser;
