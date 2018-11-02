import React, { Component } from 'react';

class Example extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    this.setState({
      value: this.state.value + 1,
    });
    console.log('example two 1 console', this.state.value);

    this.setState({
      value: this.state.value + 1,
    });
    console.log('example two 2 console', this.state.value);

    setTimeout(() => {
      // 在这里setState是同步的。因为batchingUpdate为false
      this.setState({
        value: this.state.value + 1,
      });
      console.log('example two 3 console', this.state.value);

      this.setState({
        value: this.state.value + 1,
      });
      console.log('example two 4 console', this.state.value);
    }, 10);
  }

  render() {
    console.log('render');
    return <div>exampleTwo</div>;
  }
}

export default Example;
