import React, { Component } from 'react';
import styles from './styles.css';
import Props from '../hocs/Props';
import FakeAsync from '../hocs/FakeAsync';
import Spinner from '../hocs/Loader';
import withSpinnerWhileLoading from '../hocs/FuncLoad';
import { withProps } from 'recompose';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div>
        <h1>I am very {this.props.message}</h1>
        {this.props.data && <h1>Because my data is here: {this.props.data}</h1>}
      </div>
    );
  }
}

// App.propTypes = {
//   children: React.PropTypes.node.isRequired,
// };
