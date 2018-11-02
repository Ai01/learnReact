// react 的事件委托机制

import React, { Component } from 'react';
import image from './qr.png';

class QrCode extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleQrCodeClick = this.handleQrCodeClick.bind(this);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    document.body.addEventListener('click', e => {
      console.log('container of all event');
      this.setState({
        active: false,
      });
    });

    // document.querySelector('.code').addEventListener('click', e => {
    //   e.stopPropagation();
    // });
  }

  componentWillUnmount() {
    document.body.removeEventListener('click');
  }

  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }

  handleQrCodeClick(e) {
    // 加上这句过后，会发现二维码还是消失了
    // 这就是因为react的事件委托机制
    console.log('test');
    e.stopPropagation();
  }

  render() {
    return (
      <div className="qr-wrapper">
        <button className="qr" onClick={this.handleClick}>
          二维码
        </button>
        <div
          className="code"
          style={{ display: this.state.active ? 'block' : 'none', background: 'black' }}
          onClick={this.handleQrCodeClick}
        >
          <img src={image} alt="qr" />
        </div>
      </div>
    );
  }
}

export default QrCode;
