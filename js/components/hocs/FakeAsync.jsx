import React from 'react';
import { Observable as O } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

const FakeAsync = WrappedComponent =>
  class FA extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        newProps: undefined,
        loading: true,
      };
    }

    getSomeData() {
      O.interval(2000).subscribe(() =>
        this.setState({ newProps: { data: 'Great stuff' }, loading: false }),
      );
    }

    componentWillMount() {
      this.getSomeData();
    }

    render() {
      return (
        <WrappedComponent {...this.props} {...this.state.newProps} loading={this.state.loading} />
      );
    }
  };

export default FakeAsync;
