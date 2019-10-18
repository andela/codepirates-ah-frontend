import * as actions from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const ArticleReducer = (state = initialState.createdArticleData, action) => {
  switch (action.type) {
    case actions.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        err: [],
        isArticleCreated: true,
      };
    case actions.CREATE_ARTICLE_FAIL:
      return {
        ...state,
        ...action.payload,
        isArticleCreated: false,
      };

    default:
      return state;
  }
};
export default ArticleReducer;
