import React, { Component } from 'react';
// import Example from './components/example/index';
import ExampleTwo from './components/exampleTwo/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Example/>*/}
        <ExampleTwo/>
      </div>
    );
  }
}

export default App;
