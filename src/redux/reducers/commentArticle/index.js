import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const commentArticleReducer = (state = initialState.comments, action) => {
  switch (action.type) {
    case actionTypes.COMMENT_ON_AN_ARTICLE_SUCCESS:
      return {
        ...state,
        data: state.data && state.data.length > 0
          ? [action.payload.data, ...state.data]
          : [action.payload.data],
      };

    case actionTypes.COMMENT_ON_AN_ARTICLE_ERROR:
      return [...state, ...action.payload];
    case actionTypes.FETCH_ALL_ARTICLE_COMMENTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.FETCH_ALL_ARTICLE_COMMENTS_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default commentArticleReducer;
