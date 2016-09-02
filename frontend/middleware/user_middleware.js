import { receiveAllUsers,
         receiveErrors,
         UserConstants
       } from '../actions/user_actions';

import { fetchAllUsers } from '../util/user_api_util';
import { Link, hashHistory } from 'react-router';



export default ({getState, dispatch}) => next => action => {
  const receiveUserSuccess = data => dispatch(receiveAllUsers(data));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case UserConstants.FETCH_ALL_USERS:
      fetchAllUsers(receiveUserSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
