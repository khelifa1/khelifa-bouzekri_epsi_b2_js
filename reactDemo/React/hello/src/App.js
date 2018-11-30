import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Form from './Form.js';class App extends Component {
class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>Comment allez vous</h2>
      <h3> première Application react </h3>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            
            Edit <code>src/App.js</code> and save to reload.
            

          </p>
          <h1>  

          Hello world  Voici votre première  application reactjs
          </h1> 
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;




