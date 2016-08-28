# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Album Cycles

### Album API Request Actions
(fetching albums for explore page)
* `fetchAllAlbums`
  0. invoked from `AlbumsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/albums` is called.
  0. `receiveAllalbums` is set as the success callback.

(fetching albums for userpage)
* `fetchAllAlbums`
  0. invoked from `AlbumsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/users/:UserId/albums` is called.
  0. `receiveAllalbums` is set as the success callback.
  
* `createalbum`
  0. invoked from new album button `onClick`
  0. `POST /api/users/:UserId/albums` is called.
  0. `receiveSingleAlbum` is set as the success callback.

(fetching single album for view)
* `fetchSingleAlbum`
  0. invoked from `onClick` of coverphoto `didMount`/`willReceiveProps`
  0. `GET /api/users/:UserId/album/:AlbumId` is called.
  0. `receiveSingleAlbum` is set as the success callback.

* `updateAlbum`
  0. invoked from save button `onClick` in edit view
  0. `POST /api/users/:UserId/album/:AlbumId` is called.
  0. `receiveSingleAlbum` is set as the success callback.

* `destroyAlbum`
  0. invoked from delete album button `onClick`
  0. `DELETE /api/users/:UserId/albums/:AlbumId` is called.
  0. deletes album and all photos in album.
  0. `removeAlbum` is set as the success callback.

### Album API Response Actions

* `receiveAllAlbums`
  0. invoked from an API callback
  0. the `AlbumReducer` updates `albums` in the application's state.

* `receiveSingleAlbum`
  0. invoked from an API callback
  0. the `AlbumReducer` updates `albums[id]` in the application's state.

* `removeAlbum`
  0. invoked from an API callback
  0. the `AlbumReducer` removes `albums[id]` from the application's state.

## Photo Cycles

### Photos API Request Actions

(fetching photos for the explore page)
* `fetchAllPhotos`
  0. invoked from `PhotosIndex` `didMount`/`willReceiveProps`
  0. `GET /api/photos` is called.
  0. `receiveAllPhotos` is set as the success callback.

* `createPhoto`
  0. invoked from new Photo button `onClick` in edit album page
  0. `POST /api/users/:UserId/albums/:AlbumId` is called.
  0. `receiveSingleNotebook` is set as the callback.

* `fetchSinglePhoto`
  0. invoked from onClick of photo in album `didMount`/`willReceiveProps`
  0. `GET /api/photos/:PhotoId` is called.
  0. `receiveSinglePhoto` is set as the success callback.

* `updatePhoto`
  0. invoked from onClick of save button in individual photo edit popup`
  0. `POST /api/photos` is called.
  0. `receiveSinglephoto` is set as the success callback.

* `destroyPhoto`
  0. invoked from delete photo button `onClick` after clicking an X over photo in edit page
  0. `DELETE /api/notebooks/:id` is called.
  0. `removePhoto` is set as the success callback.

### Photos API Response Actions 

* `receiveAllPhotos`
  0. invoked from an API callback.
  0. The `Photo` reducer updates `photos` in the application's state.

* `receiveSinglePhoto`
  0. invoked from an API callback.
  0. The `Photo` reducer updates `photos[id]` in the application's state.

* `removePhoto`
  0. invoked from an API callback.
  0. The `Photo` reducer removes `photos[id]` from the application's state.

