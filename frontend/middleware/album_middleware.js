import { receiveAllAlbums,
         receiveErrors,
         AlbumConstants
       } from '../actions/album_actions';

import { fetchAllAlbums } from '../util/album_api_util';
import { Link, hashHistory } from 'react-router';



export default ({getState, dispatch}) => next => action => {
  const receiveAlbumSuccess = data => dispatch(receiveAllAlbums(data));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case AlbumConstants.FETCH_ALL_ALBUMS:
      fetchAllAlbums(receiveAlbumSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
