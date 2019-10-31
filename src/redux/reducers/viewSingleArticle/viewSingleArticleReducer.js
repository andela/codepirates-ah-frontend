import * as actions from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const viewArticle = (state = initialState, action) => {
  switch (action.type) {
    case actions.VIEW_ARTICLE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isArticleViewed: true,
      };
    case actions.VIEW_ARTICLE_ERROR:
      return {
        ...state,
        ...action.payload,
        isArticleViewed: false,
      };
    default:
      return state;
  }
};

export default viewArticle;
