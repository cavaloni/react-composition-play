import React from 'react';

const Props = newProps => WrappedComponent => class PP extends React.Component {
  constructor() {
    super();
    this.newProps = { message: newProps };
  }

  render() {
    return <WrappedComponent {...this.props} {...this.newProps} />;
  }
  };

export default Props;
