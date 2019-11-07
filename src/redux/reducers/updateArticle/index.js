import {
  UPDATE_ARTICLE_FAILURE,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_EDIT_MODE,
} from '../../actions/actionTypes';
import initialState from '../../store/initialState';

export const updateArticleReducer = (
  state = initialState.updateArticle,
  action,
) => {
  switch (action.type) {
    case UPDATE_ARTICLE_SUCCESS:
      return { ...state, ...action.payload };
    case UPDATE_ARTICLE_FAILURE:
      return { ...state, ...action.payload };
    case UPDATE_EDIT_MODE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default updateArticleReducer;
