import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_RESULTS_PENDING:
      return { ...state, searchPending: true };
    case actionTypes.SEARCH_RESULTS_SUCCESS:
      return { ...state, searchPending: false, searchResults: action.searchResults };
    case actionTypes.SEARCH_RESULTS_ERROR:
      return { ...state, searchPending: false, searchError: action.searchError };
    default:
      return state;
  }
}
