import merge from 'lodash/merge';
import {SessionConstants} from "../actions/session_actions";

const defaultState = {currentUser: null, errors:[]}

const SessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
    
      const currentUser = action.currentUser
      return merge({}, defaultState, {currentUser});
    case SessionConstants.RECEIVE_ERRORS:
      return action.errors;
    case SessionConstants.LOGOUT:
      return ;
    default:
      return state;
  }
};

export default SessionReducer;
