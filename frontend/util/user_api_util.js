import { receiveAllUsers, receiveErrors } from '../actions/user_actions';

export const fetchAllUsers = function(success, error) {
  debugger;
	$.ajax({
		method: 'GET',
		url: 'api/user',
		success,
		error
	});
};
