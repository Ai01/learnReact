import React, { Component } from 'react';

class Example extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  componentDidMount() {

    // 这两次setState的结果最后是1。因为第二次的this.state.value是0
    // 同时需要注意到的是不会有两个render的过程。这说明react的batchUpdates起了作用。
    this.setState({
      value: this.state.value + 1,
    });
    console.log('1 console', this.state.value);

    this.setState({
      value: this.state.value + 1,
    });
    console.log('2 console', this.state.value);

  }

  render() {
    console.log('end', this.state.value);
    return <div>example</div>;
  }
}

export default Example;
