export const UserConstants = {
  FETCH_ALL_USERS: "FETCH_ALL_USERS",
  RECEIVE_ALL_USERS: "RECEIVE_ALL_USERS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
};

export const fetchAllUsers = () => ({
  type: UserConstants.FETCH_ALL_USERS
});

export const receiveAllUsers = users => ({
  type: UserConstants.RECEIVE_ALL_USERS,
  users
});

export const receiveErrors = errors => ({
  type: UserConstants.RECEIVE_ERRORS,
  errors
});
