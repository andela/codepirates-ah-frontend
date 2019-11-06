import commentReducer from '.';
import * as actionsTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const successMockedResponse = {
  status: 'success',
  data: [],
  message: 'All comments successfully retrieved',
};
const errorMockedResponse = {
  status: 'error',
  message: 'No comments found',
};

describe('comment page Reducer', () => {
  it('should return initialState when there is no action', () => {
    const res = commentReducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });
  it('should return an updated state with data from database when the comment page renders successfully', () => {
    const res = commentReducer(initialState, {
      type: actionsTypes.FETCH_ALL_ARTICLE_COMMENTS_SUCCESS,
      payload: successMockedResponse,
    });
    expect(res).toMatchObject({ comments: {} });
  });
  it('should return an error message when no data rendered', () => {
    const res = commentReducer(initialState, {
      type: actionsTypes.FETCH_ALL_ARTICLE_COMMENTS_ERROR,
      payload: errorMockedResponse,
    });
    expect(res).toMatchObject({ comments: {} });
  });
});
