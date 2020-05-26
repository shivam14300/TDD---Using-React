// jest.mock('../http.js');

import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import '../setupTests';
import renderer from 'react-test-renderer';

test ('test snapshot', () => {
  const component = renderer.create(<App/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}) 


// describe('test', () => {
//   it('test1', () => {
//     const res = new App();
//     res.loadTitle().then(title => {
//       expect(title).toEqual('DELECTUS AUT AUTEM');
//     })
//   })
// })

// describe('Testing Button Clicks',() =>{
//   let wrapper;
//   it('Testing Button Click of API1',() => {
//     wrapper = shallow(<App/>);
//     wrapper.find('#button1').simulate('click');
//     wrapper.update();
//     expect(wrapper.state('title1')).toEqual('Calling API1...');
//   })
//   it('Testing Button Click of API2',() => { 
//     wrapper = shallow(<App/>);
//     wrapper.find('#button2').simulate('click');
//     wrapper.update();
//     expect(wrapper.state('title2')).toEqual('Calling API2...(Please Wait)');
//   })
//   it('Testing Button Click of API3',() => {
//     wrapper = shallow(<App/>);
//     wrapper.find('#button3').simulate('click');
//     wrapper.update();
//     expect(wrapper.state('title3')).toEqual('Calling API3...');
//   })
// })


// describe('Testing API function',() => {
  
//   const fake = jest.spyOn(App.prototype, 'API_GET');
//   const wrapper = shallow(<App/>);
//   wrapper.find('#button1').simulate('click');
//   wrapper.update();
//   it('check that function API_GET is defined', () => {
//     expect(fake).toBeDefined(); // check that function API_GET is defined
//   })
  
//   it('check that function API_GET is called on click', () => {
//     expect(fake).toHaveBeenCalled(); // check that function API_GET is called
//   })
  
//   it('check that function API_GET returns successfully on calling', () => {
//     expect(fake).toHaveReturned(); // check that function API_GET returns successfully
//   })
  
// })

// describe('Testing methods of API call using Async functions', () => {
//   it('Api fetch testing for GET',async () => {
//     const res = new App();
//     var data = await res.API_GET();
//     expect(data.movies[0].id).toEqual('1');   
//     expect(data.movies[1]).toHaveProperty(['releaseYear'],'1985');   
//   },100000)
  
//   it('Api fetch testing for POST',async () => {
//     const res = new App();
//     var data = await res.API_POST();
//     expect(data.id).toEqual(101);   
//   },100000000)
  
  
// })

// describe('Test rendering', () => {
//   it('Test that text is rendered', () => {
//     const wrapper = shallow(<App/>);
//     expect(wrapper.find('#para').text()).toEqual("not set")
//     wrapper.find('#button1').simulate('click');
//     wrapper.update();
//     // expect(wrapper.find('#para').text()).toEqual("1")
//   })
// })