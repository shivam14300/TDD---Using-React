export const fetchData = () => {
    console.log('calling mocked http.js');
    return Promise.resolve({ title: 'delectus aut autem' });
};