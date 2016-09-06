import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import PhotoMiddleware from './photo_middleware';
import AlbumMiddleware from './album_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotoMiddleware,
  UserMiddleware,
  AlbumMiddleware
);

export default RootMiddleware;
