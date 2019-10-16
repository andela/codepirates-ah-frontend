import signupReducer from '.';
import * as actionsTypes from '../../actions/actionTypes';
import mockedResponse from '../../../__mocks__/registeredUser';
import initialState from '../../store/initialState';

const errorMockedResponse = {
  status: 404,
  message: 'Cannot find User with the ema… username',
};


describe('Signup Reducer', () => {
  it('should return initialState when there is no action', () => {
    const res = signupReducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });
  it('should return an updated state with data from database when signup is successful', () => {
    const res = signupReducer(initialState, {
      type: actionsTypes.SIGNUP_SUCCESS,
      payload: mockedResponse,
    });
    expect(res).toMatchObject({ isRegistered: true });
  });
  it('should return an error message when signup fails', () => {
    const res = signupReducer(initialState, {
      type: actionsTypes.SIGNUP_ERROR,
      payload: errorMockedResponse,
    });
    expect(res).toMatchObject({ isRegistered: false });
  });
});
