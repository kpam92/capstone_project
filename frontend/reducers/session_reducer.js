import merge from 'lodash/merge';
import {SessionConstants} from "../actions/session_actions";

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, state, action.benches);
    case SessionConstants.RECEIVE_ERRORS:
      return merge({}, state, action.benches);
    case SessionConstants.LOGOUT:
      return merge({}, state, action.benches);
    default:
      return state;
  }
};

export default SessionReducer;
