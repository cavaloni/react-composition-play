import React, { Component } from 'react';

const Spinner = WrappedComponent =>
  class S extends Component {
    spinner = () => (
      <div className="Spinner">
        <h1 className="loader">Loading...</h1>
      </div>
    );

    render() {
      return (
        <div>
          <WrappedComponent {...this.props} />
          {this.props.loading && this.spinner()}
        </div>
      );
    }
  };
export default Spinner;

