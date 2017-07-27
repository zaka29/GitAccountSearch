import React, { Component } from 'react';

const GitUser = ({ user }) => {

    return (
        <tr>
            <td>
                <img src={user.avatar_url} alt=""/>
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
