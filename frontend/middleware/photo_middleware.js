import { receiveAllPhotos,
         receiveNewPhoto,
         receiveErrors,
         PhotoConstants
       } from '../actions/photo_actions';

import { fetchAllPhotos, createPhoto } from '../util/photo_api_util';
import { Link, hashHistory } from 'react-router';



export default ({getState, dispatch}) => next => action => {
  const receivePhotoSuccess = data => dispatch(receiveAllPhotos(data));
  const receiveNewPhotoSuccess = (data) => {
    dispatch(receiveNewPhoto(data));
    hashHistory.push(`/album/${data.album_id}`);
  };
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case PhotoConstants.FETCH_ALL_PHOTOS:
      fetchAllPhotos(receivePhotoSuccess, errorCallback);
      next(action);
      break;
    case PhotoConstants.CREATE_PHOTO:
      createPhoto(action.photo,receiveNewPhotoSuccess, errorCallback);
      return next(action);
      break;
    default:
      return next(action);
  }
};
