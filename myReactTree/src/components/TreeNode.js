import React, { Component } from 'react';

class TreeNode extends Component {
  state = {
    showChildren: true,
    checked: false,
    value: null,
  };

  componentWillMount() {
    const { showChildren, checked, value } = this.props;
    this.setState({
      showChildren,
      checked,
      value,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.state;
    const { showChildren, checked, addNodeValue, removeNodeValue } = this.props;
    const { showChildren: nextShowChildren, checked: nextChecked } = nextProps;

    if (nextShowChildren !== showChildren) {
      this.setState({
        showChildren: nextShowChildren,
      });
    }

    if (checked !== nextChecked) {
      this.setState(
        {
          checked: nextChecked,
        },
        () => {
          // 父子node的联合功能
          if (nextChecked) {
            addNodeValue(value);
          } else {
            removeNodeValue(value);
          }
        },
      );
    }
  }

  renderChildren = child => {
    const { showChildren, addNodeValue, removeNodeValue } = this.props;
    const { checked } = this.state;

    if (!child) {
      return null;
    }

    const e = React.cloneElement(child, {
      showChildren,
      addNodeValue,
      removeNodeValue,
      checked,
    });

    return e;
  };

  render() {
    const { children, title, style, addNodeValue, removeNodeValue } = this.props;
    const { showChildren, checked, value } = this.state;

    return (
      <div style={{ borderLeft: showChildren && children ? '1px dashed black' : null, marginBottom: 5 }}>
        {children ? (
          <div
            onClick={() => this.setState({ showChildren: !showChildren })}
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              margin: 5,
              cursor: 'pointer',
              border: '1px solid blue',
              width: 15,
              height: 15,
              lineHeight: '15px',
              textAlign: 'center',
            }}
          >
            {showChildren ? '-' : '+'}
          </div>
        ) : null}
        <div style={{ display: 'inline-block', verticalAlign: 'top', marginRight: 5 }}>
          <input
            type="checkbox"
            checked={checked}
            onClick={e => {
              const _checked = e.target.checked;
              this.setState({ checked: _checked }, () => {
                if (_checked) {
                  addNodeValue(value);
                } else {
                  removeNodeValue(value);
                }
              });
            }}
          />
        </div>
        <div style={{ display: 'inline-block', verticalAlign: 'top' }}>{title}</div>
        <div style={{ ...style, listStyle: 'none', textAlign: 'left', display: 'inline-block', marginTop: 20 }}>
          {showChildren ? React.Children.map(children, this.renderChildren, this) : null}
        </div>
      </div>
    );
  }
}

export default TreeNode;
