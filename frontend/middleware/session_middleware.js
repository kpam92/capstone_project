import {SessionConstants, receiveUser} from '../actions/session_actions';
import {login, signup, logout} from '../util/session_api_util';

const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const success = data => dispatch(receiveCurrentUser(data));
  switch (action.type) {
    case SessionConstants.LOGIN:
      login(success);
      return next(action);
    case SessionConstants.SIGNUP:
      // const success = data => dispatch(receiveCurrentUser(data))
      signup(success);
      return next(action);
    case SessionConstants.LOGOUT:
      const success = data => dispatch(receiveBenches(data))
      logout(() => next(action));
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
