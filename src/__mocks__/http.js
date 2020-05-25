export const fetchData = () => {
    console.log('calling fake fetchData');
    return Promise.resolve({ title: 'delectus aut autem' });
};