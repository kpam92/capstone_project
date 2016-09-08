export const SearchConstants = {
  RECEIVE_NEW_SEARCH_RESULTS: "RECEIVE_NEW_SEARCH_RESULTS"
};


export const receiveNewSearchResults = search_results => ({
	type: SearchConstants.RECEIVE_NEW_SEARCH_RESULTS,
	search_results
});
