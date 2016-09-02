export const PhotoConstants = {
  FETCH_ALL_PHOTOS: "FETCH_ALL_PHOTOS",
  RECEIVE_ALL_PHOTOS: "RECEIVE_ALL_PHOTOS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
};

export const fetchAllPhotos = () => ({
  type: PhotoConstants.FETCH_ALL_PHOTOS
});

export const receiveAllPhotos = photos => ({
  type: PhotoConstants.RECEIVE_ALL_PHOTOS,
  photos
});

export const receiveErrors = errors => ({
  type: PhotoConstants.RECEIVE_ERRORS,
  errors
});
