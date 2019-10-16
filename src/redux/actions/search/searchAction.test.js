import * as searchAction from './searchAction';
import * as actionTypes from '../actionTypes';

describe('search action', () => {
  it('should return right action type on search results pending action', () => {
    expect(searchAction.fetchSearchResultsPending().type)
      .toEqual(actionTypes.SEARCH_RESULTS_PENDING);
  });
  it('should return right action type and search results on search results success action', () => {
    const searchResults = {
      articles: {
        id: 1,
        body: 'Sample article',
      },
    };
    expect(searchAction.fetchSearchResultsSuccess(searchResults).type)
      .toEqual(actionTypes.SEARCH_RESULTS_SUCCESS);
    expect(searchAction.fetchSearchResultsSuccess(searchResults).searchResults)
      .toEqual(searchResults);
  });
  it('should return right action type and search results on search results success action', () => {
    const searchError = {
      0: {
        message: 'Internal Server error',
      },
    };
    expect(searchAction.fetchSearchResultsError(searchError).type)
      .toEqual(actionTypes.SEARCH_RESULTS_ERROR);
    expect(searchAction.fetchSearchResultsError(searchError).searchError)
      .toEqual(searchError);
  });
});
