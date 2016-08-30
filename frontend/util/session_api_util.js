
export const signup = success => {
  $.ajax({
    method: 'POST',
    url: 'api/users',
    success
  });
};
export const login = success => {
  $.ajax({
    method: 'POST',
    url: 'api/session',
    success
  });
};
export const logout = success => {
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
    success
  });
};
