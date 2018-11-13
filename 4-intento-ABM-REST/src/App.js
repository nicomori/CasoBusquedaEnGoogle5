import React, { Component } from 'react';
import PostList from './posts/PostList';
import logo from './logo.svg';
import './App.css';


import PersonInput from './Components/PersonInput'
import PersonDelete from './Components/PersonDelete'
import PersonList from './Components/PersonList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <PostList/>


          <PersonDelete />
          <PersonInput />
          <PersonList />

        </header>







      </div>
    );
  }
}

export default App;
