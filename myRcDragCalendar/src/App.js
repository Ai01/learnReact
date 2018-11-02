import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ position: 'fixed', top: 10 }} >a</div>
        <div style={{ width: 100, height: 100, background: 'red' }} >c</div>
        <div style={{ position: 'fixed', top: 10 }} >b</div>
      </div>

    );
  }
}

export default App;
