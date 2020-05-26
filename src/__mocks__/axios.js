export const get = url => {
    console.log('calling mocked axios.js');
    return Promise.resolve({ data: { title: 'delectus aut autem' } });
};