export const AlbumConstants = {
  FETCH_ALL_ALBUMS: "FETCH_ALL_ALBUMS",
  RECEIVE_ALL_ALBUMS: "RECEIVE_ALL_ALBUMS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
};

export const fetchAllAlbums = () => ({
  type: AlbumConstants.FETCH_ALL_ALBUMS
});

export const receiveAllAlbums = albums => ({
  type: AlbumConstants.RECEIVE_ALL_ALBUMS,
  albums
});

export const receiveErrors = errors => ({
  type: AlbumConstants.RECEIVE_ERRORS,
  errors
});
