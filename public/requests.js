import axios from 'axios';

export const getGitHubUsersByName = (searchTerm) => {
    return axios.get('https://api.github.com/search/users', {
        params: {
            q: searchTerm,
            per_page: '100'
        }
    })
};