import * as actions from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const landingPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ARTICLES_ON_LANDING_PAGE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case actions.FETCH_ARTICLES_ON_LANDING_PAGE_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default landingPageReducer;
