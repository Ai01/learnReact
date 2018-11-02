import React, { Component } from 'react';
import QRCode from './component/qr/index';
// import Event  from './component/event/index';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <QRCode/>
        {/*<Event/>*/}
      </div>
    );
  }
}

export default App;
