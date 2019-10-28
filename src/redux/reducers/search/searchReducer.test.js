import searchReducer from './searchReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('Search reducer', () => {
  const initialState = {
    searchPending: false,
    searchResults: {},
    searchError: null,
  };
  const searchResultMock = {
    data: {
      results: 'some results',
    },
  };
  const errorMock = { message: 'Internal server error' };
  it('should return initial state if no action type provided', () => {
    const res = searchReducer(initialState, {});
    expect(res).toEqual({
      searchPending: false,
      searchResults: {},
      searchError: null,
    });
  });
  it('should update pending state to true', () => {
    const fetchSearchAction = {
      type: actionTypes.SEARCH_RESULTS_PENDING,
    };
    const res = searchReducer(initialState, fetchSearchAction);
    expect(res).toMatchObject({ searchPending: true });
  });
  it('should update search state when request successful', () => {
    const fetchSearchAction = {
      type: actionTypes.SEARCH_RESULTS_SUCCESS,
      searchResults: searchResultMock,
    };
    const res = searchReducer(initialState, fetchSearchAction);
    expect(res).toMatchObject({
      searchResults: {
        data: {
          results: 'some results',
        },
      },
    });
  });
  it('should update profile error state when request fails', () => {
    const fetchSearchAction = {
      type: actionTypes.SEARCH_RESULTS_ERROR,
      searchError: errorMock,
    };
    const res = searchReducer(initialState, fetchSearchAction);
    expect(res).toMatchObject({
      searchError: { message: 'Internal server error' },
    });
  });
});
