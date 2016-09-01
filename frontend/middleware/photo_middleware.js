import { receiveAllPhotos,
         receiveErrors,
         PhotoConstants
       } from '../actions/photo_actions';

import { fetchAllPhotos } from '../util/photo_api_util';
import { Link, hashHistory } from 'react-router';



export default ({getState, dispatch}) => next => action => {
  const receivePhotoSuccess = data => dispatch(receiveAllPhotos(data));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case PhotoConstants.FETCH_ALL_PHOTOS:
      fetchAllPhotos(receivePhotoSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
