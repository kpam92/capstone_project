import React from "react";
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import Root from './components/root';
import {receiveCurrentUser} from "./actions/session_actions"
import {fetchAllPhotos} from "./actions/photo_actions"




document.addEventListener("DOMContentLoaded", () => {
  let store;
if (window.currentUser) {
  const initialState = {session: {currentUser: window.currentUser}};
  store = configureStore(initialState);
} else {
  store = configureStore();
}

  const root = document.getElementById("root");
  ReactDOM.render(<Root store = {store}/>, root);
  window.store = store;
  window.receiveCurrentUser = receiveCurrentUser;
  window.fetchAllPhotos = fetchAllPhotos;

});
