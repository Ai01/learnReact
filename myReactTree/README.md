# 实现一个rc-tree

## 基本组成

> rc-tree是由Tree和TreeNode组成的。(所以再不支持treeData的基础上是不需要涉及tree算法的。)


## Tree的实现

> Tree最大的作用是用来给TreeNode来传递参数的，如果不考虑这一点，其实直接写成
```js
  render(){

    const { children, style } = this.props;

    return (
      <div style={{ textAlign: 'left', ...style }}>
        {/*{React.Children.map(children, this.renderChildren)}*/}
        { children}
      </div>
    );
  }
```
> 也是可以的




> 当为了传递参数给children时，需要对children进行遍历渲染
```js
class Tree extends Component {

  renderChildren = (child, index, level) => {
    const { expandAll } = this.props;
    console.log('expandAll', expandAll);
    return React.cloneElement(child, { showChildren: expandAll || false });
  }

  render(){

    const { children, style } = this.props;

    return (
      <div style={{ textAlign: 'left', ...style }}>
        {React.Children.map(children, this.renderChildren)}
        {/*{ children}*/}
      </div>
    );
  }

}
```

## TreeNode的实现

