import { receiveAllAlbums,
         receiveSingleAlbum,
         receiveErrors,
         AlbumConstants
       } from '../actions/album_actions';

import { fetchAllAlbums, fetchSingleAlbum } from '../util/album_api_util';
import { Link, hashHistory } from 'react-router';



export default ({getState, dispatch}) => next => action => {
  const receiveAllAlbumSuccess = data => dispatch(receiveAllAlbums(data));
  const receiveSingleAlbumSuccess = data => dispatch(receiveSingleAlbum(data));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case AlbumConstants.FETCH_ALL_ALBUMS:
      fetchAllAlbums(receiveAllAlbumSuccess, errorCallback);
      return next(action);
    case AlbumConstants.FETCH_SINGLE_ALBUM:
      fetchSingleAlbum(action.id, receiveSingleAlbumSuccess, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
