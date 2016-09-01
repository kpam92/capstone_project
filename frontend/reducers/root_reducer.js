import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';

export const RootReducer = combineReducers({
  session: SessionReducer,
  photo: PhotoReducer
}

);

export default RootReducer;
