import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';


const BookmarksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MY_BOOKMARKS__FAIL:
      return { ...state };
    case actionTypes.FETCH_MY_BOOKMARKS_SUCCESS:
      return { ...state, myBookmarks: action.bookmarks };
    default:
      return state;
  }
};
export default BookmarksReducer;
