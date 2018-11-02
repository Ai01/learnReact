import React, { Component } from 'react';
import Select from './components/select';
import Option from './components/option';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>my react select</div>
        <Select style={{ marginLeft: 50 }}>
          <Option value={'1'} label={'1'}>
            1
          </Option>
          <Option value={'2'} label={'2'}>
            2
          </Option>
          <Option value={'3'} label={'3'}>
            3
          </Option>
          <Option value={'4'} label={'4'}>
            4
          </Option>
        </Select>
      </div>
    );
  }
}

export default App;
