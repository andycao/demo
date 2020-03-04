import React from 'react';

function logProps(WrappedComponent) {
    return class extends React.Component {
      componentWillReceiveProps(nextProps) {
        console.log('Current props: ', this.props);
        console.log('Next props: ', nextProps);
      }
      render() {
        // 将 input 组件包装在容器中，而不对其进行修改。Good!
        return <WrappedComponent {...this.props} />;
      }
    }
  }