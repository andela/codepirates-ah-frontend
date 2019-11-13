import * as actionTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const viewArticle = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VIEW_ARTICLE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isArticleViewed: true,
      };
    case actionTypes.VIEW_ARTICLE_ERROR:
      return {
        ...state,
        ...action.payload,
        isArticleViewed: false,
      };
    case actionTypes.DELETE_ARTICLE_SUCCESS:
      return { ...state, articleDeleted: true };
    case actionTypes.DELETE_ARTICLE_FAIL:
      return { ...state, articleDeleted: false };
    case actionTypes.RATE_ARTICLE_SUCCESS:
      return { ...state, articleRated: true };
    case actionTypes.RATE_ARTICLE_FAIL:
      return { ...state, articleRated: false };
    case actionTypes.SHARE_ARTICLE_SUCCESS:
      return { ...state, ...action.payload };
    case actionTypes.SHARE_ARTICLE_FAILURE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default viewArticle;
