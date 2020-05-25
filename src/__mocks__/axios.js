export const get = url => {
    console.log('calling fake get');
    return Promise.resolve({ data: { title: 'delectus aut autem' } });
};