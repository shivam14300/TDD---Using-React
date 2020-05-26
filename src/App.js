import React from 'react';
import fetch from 'node-fetch';
const {fetchData} = require ('./http');

export default class App extends React.Component {
  constructor () {
    super ();

    this.state = {
      title1: 'API1',
      title2: 'API2',
      title3: 'API3',
      title4: 'API4',
      data: {movies: [{id: 'not set'}]},
      data1: {id: ['not set']},
      data2: {movies: [{releaseYear: 'not set'}]},
    };

    this.changeTitle1 = this.changeTitle1.bind (this);
    this.changeTitle2 = this.changeTitle2.bind (this);
    this.changeTitle3 = this.changeTitle3.bind (this);
    this.changeTitle4 = this.changeTitle4.bind (this);
  }

  async API_POST () {
    return fetch ('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify ({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then (response => response.json ())
      .then (res => {
        this.setState ({data1: res});
        return res;
      });
  }

  async API_GET () {
    return fetch ('http://reactnative.dev/movies.json')
      .then (result => {
        return result.json ();
      })
      .then (res => {
        this.setState ({data: res});
        return res;
      });
  }

  async API_GET1 () {
    return fetch ('http://reactnative.dev/movies.json')
      .then (result => {
        return result.json ();
      })
      .then (res => {
        this.setState ({data2: res});
        return res;
      });
  }

  async loadTitle () {
    return fetchData ().then (ext => {
      const title = ext.title;
      const upper_title = title.toUpperCase ();
      return upper_title;
    });
  }

  changeTitle1 () {
    this.setState ({title1: 'Calling API1...'});
    // this.setState({ data: {"movies": [{"id" : "1"},]} });
    return this.API_GET ();
  }

  changeTitle2 () {
    this.setState ({title2: 'Calling API2...(Please Wait)'});
    this.API_POST ();
  }

  changeTitle3 () {
    this.setState ({title3: 'Calling API3...'});
    this.API_GET1 ();
  }

  changeTitle4 () {
    this.loadTitle ().then (title => {
      console.log (title);
    });
  }

  render () {
    return (
      <div>
        <button id="button1" onClick={this.changeTitle1}>
          {this.state.title1}
        </button>
        <br />
        <p id="para">
          {this.state.data.movies[0].id}
        </p>
        <button id="button2" onClick={this.changeTitle2}>
          {this.state.title2}
        </button>
        <br />
        <p>
          {this.state.data1.id}
        </p>
        <button id="button3" onClick={this.changeTitle3}>
          {this.state.title3}
        </button>
        <br />
        <p style={{color: 'red'}}>
          {this.state.data2.movies[0].releaseYear}
        </p>
        <button id="button4" onClick={this.changeTitle4}>
          {this.state.title4}
        </button>
        <br />
      </div>
    );
  }
}
