export const AlbumConstants = {
  FETCH_ALL_ALBUMS: "FETCH_ALL_ALBUMS",
  RECEIVE_ALL_ALBUMS: "RECEIVE_ALL_ALBUMS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  FETCH_SINGLE_ALBUM: "FETCH_SINGLE_ALBUM",
  RECEIVE_SINGLE_ALBUM: "RECEIVE_SINGLE_ALBUM",
  CREATE_ALBUM: "CREATE_ALBUM",
  RECEIVE_NEW_ALBUM: "RECEIVE_NEW_ALBUM"
};

export const fetchAllAlbums = () => ({
  type: AlbumConstants.FETCH_ALL_ALBUMS
});

export const receiveAllAlbums = albums => ({
  type: AlbumConstants.RECEIVE_ALL_ALBUMS,
  albums
});
export const fetchSingleAlbum = id => ({
  type: AlbumConstants.FETCH_SINGLE_ALBUM,
  id
});

export const receiveSingleAlbum = albums => ({
  type: AlbumConstants.RECEIVE_SINGLE_ALBUM,
  album
});

export const receiveNewAlbum = album => ({
	type: AlbumConstants.RECEIVE_NEW_ALBUM,
	album
});

export const createAlbum = (album, push) => ({
  type: AlbumConstants.CREATE_ALBUM,
  album,
  push
});

export const receiveErrors = errors => ({
  type: AlbumConstants.RECEIVE_ERRORS,
  errors
});
