import React, { Component } from 'react';
import simpleHoc from './simpleHOC';

class Text extends Component {
  render(){

    const { name } = this.props;

    return (
      <div>
        {`test/${name}`}
      </div>
    );
  }
}

export default simpleHoc(Text);
