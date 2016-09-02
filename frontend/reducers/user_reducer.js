import merge from 'lodash/merge';
import {UserConstants} from "../actions/user_actions";



const UserReducer = (oldState = [] , action) => {
  switch (action.type) {
    case UserConstants.RECEIVE_ALL_USERS:
      return [...action.users];
    case UserConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {errors});
    default:
      return oldState
  }
};

export default UserReducer;
