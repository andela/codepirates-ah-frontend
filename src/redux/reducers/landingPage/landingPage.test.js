import landingPageReducer from '.';
import * as actionsTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const successMockedResponse = {
  status: 200,
  data: {},
  message: 'All articles on Authors haven',
};
const errorMockedResponse = {
  status: 404,
  message: 'No articles found',
};

describe('Landing page Reducer', () => {
  it('should return initialState when there is no action', () => {
    const res = landingPageReducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });
  it('should return an updated state with data from database when the landing page renders successfully', () => {
    const res = landingPageReducer(initialState, {
      type: actionsTypes.FETCH_ARTICLES_ON_LANDING_PAGE_SUCCESS,
      payload: successMockedResponse,
    });
    expect(res).toMatchObject({ articles: {} });
  });
  it('should return an error message when no data rendered', () => {
    const res = landingPageReducer(initialState, {
      type: actionsTypes.FETCH_ARTICLES_ON_LANDING_PAGE_ERROR,
      payload: errorMockedResponse,
    });
    expect(res).toMatchObject({ articles: {} });
  });
  it('should return an updated state with popular articles from database when the landing page renders successfully', () => {
    const res = landingPageReducer(initialState, {
      type: actionsTypes.FETCH_POPULAR_ARTICLES_ON_LANDING_PAGE_SUCCESS,
      payload: successMockedResponse,
    });
    expect(res).toMatchObject({ articles: {} });
  });
  it('should return an error message when no popular articles rendered', () => {
    const res = landingPageReducer(initialState, {
      type: actionsTypes.FETCH_POPULAR_ARTICLES_ON_LANDING_PAGE_ERROR,
      payload: errorMockedResponse,
    });
    expect(res).toMatchObject({ articles: {} });
  });
});
