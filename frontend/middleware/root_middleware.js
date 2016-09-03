import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import PhotoMiddleware from './photo_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotoMiddleware,
  UserMiddleware
);

export default RootMiddleware;
