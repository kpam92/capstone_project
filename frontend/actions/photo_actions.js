export const PhotoConstants = {
  FETCH_ALL_PHOTOS: "FETCH_ALL_PHOTOS",
  RECEIVE_ALL_PHOTOS: "RECEIVE_ALL_PHOTOS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  CREATE_PHOTO: 'CREATE_PHOTO',
  RECEIVE_NEW_PHOTO: 'RECEIVE_NEW_PHOTO',

};

export const fetchAllPhotos = () => ({
  type: PhotoConstants.FETCH_ALL_PHOTOS
});

export const receiveAllPhotos = photos => ({
  type: PhotoConstants.RECEIVE_ALL_PHOTOS,
  photos
});

export const createPhoto = (photo, push) => ({
	type: PhotoConstants.CREATE_PHOTO,
	photo,
	push
});

export const receiveNewPhoto = photo => ({
	type: PhotoConstants.RECEIVE_NEW_PHOTO,
	photo
});

export const receiveErrors = errors => ({
  type: PhotoConstants.RECEIVE_ERRORS,
  errors
});
