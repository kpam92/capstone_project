import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import CommentMiddleware from './comment_middleware';
import SearchMiddleware from './search_middleware';
import PhotoMiddleware from './photo_middleware';
import AlbumMiddleware from './album_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotoMiddleware,
  UserMiddleware,
  AlbumMiddleware,
  CommentMiddleware,
  SearchMiddleware
);

export default RootMiddleware;
