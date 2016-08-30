import React from 'react';
import {Provider} from 'react-redux';

const Root = props => {
  return (
    <Provider store={props.store}>
      <h1>this is the root talking</h1>
    </Provider>
  );
};

export default Root;
