import * as actionType from '../actionTypes';

export function fetchSearchResultsPending() {
  return {
    type: actionType.SEARCH_RESULTS_PENDING,
  };
}
export function fetchSearchResultsSuccess(searchResults) {
  return {
    type: actionType.SEARCH_RESULTS_SUCCESS,
    searchResults,
  };
}
export function fetchSearchResultsError(searchError) {
  return {
    type: actionType.SEARCH_RESULTS_ERROR,
    searchError,
  };
}
