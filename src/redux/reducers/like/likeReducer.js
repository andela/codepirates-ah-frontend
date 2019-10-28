import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CLAP_PENDING:
      return { ...state, clapPending: true };
    case actionTypes.CLAP_SUCCESS:
      return { ...state, clapPending: false, claps: action.claps };
    case actionTypes.CLAP_ERROR:
      return { ...state, clapPending: false, clapError: action.error };
    case actionTypes.DISLIKE_PENDING:
      return { ...state, dislikePending: true };
    case actionTypes.DISLIKE_SUCCESS:
      return { ...state, dislikePending: false, dislikes: action.dislikes };
    case actionTypes.DISLIKE_ERROR:
      return { ...state, dislikePending: false, dislikeError: action.error };
    default:
      return state;
  }
}
