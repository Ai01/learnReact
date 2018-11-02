import React, { Component } from 'react';

const simpleHOC = (WrappedComponent) => {
  console.log(this.props);
  return class extends Component {
    render(){
      console.log('simpleHoc');
      return <WrappedComponent {...this.props} />
    }
  }
}

export default simpleHOC;
