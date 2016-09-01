import merge from 'lodash/merge';
import {PhotoConstants} from "../actions/photo_actions";

// const defaultState = Object.freeze({currentUser: null, errors:[]});
const PhotoReducer = (oldState = [] , action) => {
  switch (action.type) {
    case PhotoConstants.RECEIVE_ALL_PHOTOS:
      return [...action.photos];
    case PhotoConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {errors});
    default:
      return oldState
  }
};

export default PhotoReducer;
