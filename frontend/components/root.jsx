import React from 'react';
import {Provider} from 'react-redux';
import AppRouter from './router.jsx';

const Root = props => {
  return (
    <Provider store={props.store}>
      <AppRouter/>
    </Provider>
  );
};

export default Root;
