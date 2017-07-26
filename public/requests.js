import axios from 'axios';

export const getGitHubUsersByName = (searchTerm) => {
    // https://api.github.com/search/users?q=tom
    // axios.get('/user?ID=12345')
    return axios.get('https://api.github.com/search/users', {
        params: {
            q: searchTerm
        }
    })

};