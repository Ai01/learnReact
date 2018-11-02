import React, { Component } from 'react';
import Tree from './components/Tree';
import TreeNode from './components/TreeNode';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tree expandAll style={{ marginLeft: 40 }}>
          <TreeNode title={'test0'} value={'test0'}>
            <TreeNode title={'test0-1'} value={'test0-1'} />
            <TreeNode title={'test0-2'} value={'test0-2'}>
              <TreeNode title={'test0-2-1'} value={'test0-2-1'} />
              <TreeNode title={'test0-2-2'} value={'test0-2-2'} />
            </TreeNode>
            <TreeNode title={'test0-3'} value={'test0-3'} />
          </TreeNode>
          <TreeNode title={'test1'} value={'test1'}>
            <TreeNode title={'test1-1'} value={'test1-1'} />
            <TreeNode title={'test1-2'} value={'test1-2'}>
              <TreeNode title={'test1-2-1'} value={'test1-2-1'} />
              <TreeNode title={'test1-2-2'} value={'test1-2-2'} />
              <TreeNode title={'test1-2-3'} value={'test1-2-3'} />
            </TreeNode>
            <TreeNode title={'test1-3'} value={'test1-3'} />
          </TreeNode>
        </Tree>
      </div>
    );
  }
}

export default App;
