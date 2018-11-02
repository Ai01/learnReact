import React, { Component } from 'react';

class Option extends Component {

  render(){

    const { value, style, children} = this.props;

    return (
      <option value={value} style={style} >{children}</option>
    );
  }
}

export default Option;
