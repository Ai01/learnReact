import React, { Component } from 'react';

class Select extends Component {


  renderOption = (child, index) => {
    const e = React.cloneElement(child);
    return e;
  }

  render(){
    const { style, children } = this.props;


    const defaultStyle = { width: 100 };

    return (
      <select style={{ ...defaultStyle, ...style }}>
        {
          React.Children.map(children,this.renderOption)
        }
      </select>
    );
  }
}

export default Select;
