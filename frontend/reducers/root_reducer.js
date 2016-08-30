import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';

export const RootReducer = combineReducers({
  session: SessionReducer
}

);

export default RootReducer;
