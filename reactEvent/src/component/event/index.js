// 对react事件机制中的冒泡的探索
import React, { Component } from 'react';

const fatherStyle = {
  width: 200,
  height: 200,
  background: 'blue',
};

const childStyle = {
  width: 100,
  height: 100,
  background: 'yellow',
};

class Event extends Component {

  fatherClickHandler = () => {
    console.log('father');
  }

  childClickHandler = (e) => {
    console.log('child');
  }

  render() {
    return (
      <div style={fatherStyle} onClick={this.fatherClickHandler} >
        father
        <div style={childStyle} onClick={this.childClickHandler} >child</div>
      </div>
    );
  }
}

export default Event;
