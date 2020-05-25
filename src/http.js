const axios = require('axios');

export const fetchData = () => {
    console.log('calling original fetchData');
    return axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
        return response.data;
        });
};
