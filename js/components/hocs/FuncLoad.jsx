import React from 'react';
import { branch, renderComponent } from 'recompose';

const Spinner = () => (
  <div className="Spinner">
    <h1 className="loader">Loading...</h1>
  </div>
);

const isLoading = ({ loading }) => loading;

const withSpinnerWhileLoading = branch(isLoading, renderComponent(Spinner));

export default withSpinnerWhileLoading;
