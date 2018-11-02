import React, { Component } from 'react';

class Tree extends Component {
  state = {
    _value: [],
  };

  renderChildren = (child, index, level) => {
    const { expandAll } = this.props;
    let { _value } = this.state;
    return React.cloneElement(child, {
      showChildren: expandAll || false,
      addNodeValue: value => {
        const index = _value.indexOf(value);
        if (index === -1) {
          _value.push(value);
          this.setState(
            {
              _value,
            },
            () => {
              console.log(this.state);
            },
          );
        }
      },
      removeNodeValue: value => {
        const index = _value.indexOf(value);
        if (index !== -1) {
          _value.splice(index, 1);
          this.setState(
            {
              _value,
            },
            () => {
              console.log(this.state);
            },
          );
        }
      },
    });
  };

  render() {
    const { children, style } = this.props;

    return (
      <div style={{ textAlign: 'left', ...style }}>
        {React.Children.map(children, this.renderChildren)}
        {/*{ children}*/}
      </div>
    );
  }
}

export default Tree;
