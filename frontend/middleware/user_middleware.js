import { receiveAllUsers,
         receiveSingleUser,
         receiveErrors,
         UserConstants
       } from '../actions/user_actions';

import { fetchAllUsers, fetchSingleUser } from '../util/user_api_util';
import { Link, hashHistory } from 'react-router';



export default ({getState, dispatch}) => next => action => {
  const receiveUserSuccess = data => dispatch(receiveAllUsers(data));
  const receiveSingleUserSuccess = user => {
    dispatch(receiveSingleUser(user));
    hashHistory.push(`/profile/${user.id}`)};
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case UserConstants.FETCH_ALL_USERS:
      fetchAllUsers(receiveUserSuccess, errorCallback);
      return next(action);
    case UserConstants.GO_TO_PROFILE:
      fetchSingleUser(action.id, receiveSingleUserSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
