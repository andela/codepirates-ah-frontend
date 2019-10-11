import loginReducer from '.';
import * as actionsTypes from '../../actions/actionTypes';
import mockedResponse from '../../../__mocks__/loggedInUser';
import initialState from '../../store/initialState';

const errorMockedResponse = {
  status: 404,
  message: 'Cannot find User with the ema… username',
};


describe('Login Reducer', () => {
  it('should return initialState when there is no action', () => {
    const res = loginReducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });
  it('should return an updated state with data from database when login is successful', () => {
    const res = loginReducer(initialState, {
      type: actionsTypes.LOGIN_SUCCESS,
      payload: mockedResponse,
    });
    expect(res).toMatchObject({ isLoggedIn: true });
  });
  it('should return an error message when login fails', () => {
    const res = loginReducer(initialState, {
      type: actionsTypes.LOGIN_ERROR,
      payload: errorMockedResponse,
    });
    expect(res).toMatchObject({ isLoggedIn: false });
  });
});
