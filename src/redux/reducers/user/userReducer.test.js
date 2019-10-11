import userReducer from './userReducer';
import * as actionTypes from '../../actions/actionTypes';
import mockedResponse from '../../../__mocks__/loggedInUser';
import initialState from '../../store/initialState';

const errorMockedResponse = {
  status: 404,
  message: 'Cannot find User with the ema… username',
};
describe('Login Reducers', () => {
  it('should return initialState when there is no action', () => {
    const res = userReducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });
  it('should return an updated state with data from database when login is successful', () => {
    const res = userReducer(initialState, {
      type: actionTypes.LOGIN_SUCCESS,
      payload: mockedResponse,
    });
    expect(res).toMatchObject({ isLoggedIn: true });
  });
  it('should return an error message when login fails', () => {
    const res = userReducer(initialState, {
      type: actionTypes.LOGIN_ERROR,
      payload: errorMockedResponse,
    });
    expect(res).toMatchObject({ isLoggedIn: false });
  });
});
describe('SocialAuth reducer', () => {
  const socialMock = {
    username: 'admin',
    image: 'fakepath/image.jpg',
    bio: 'sample bio message',
  };
  it('should return an error message when login fails', () => {
    const res = userReducer(initialState, {
      type: actionTypes.FACEBOOK_AUTH_FAIL,
    });
    expect(res).toMatchObject({ isLoggedIn: false });
  });
  it('should return an error message when login fails', () => {
    const res = userReducer(initialState, {
      type: actionTypes.TWITTER_AUTH_FAIL,
    });
    expect(res).toMatchObject({ isLoggedIn: false });
  });
  it('should return an error message when login fails', () => {
    const res = userReducer(initialState, {
      type: actionTypes.GOOGLE_AUTH_FAIL,
    });
    expect(res).toMatchObject({ isLoggedIn: false });
  }); it('should return an error message when login fails', () => {
    const res = userReducer(initialState, {
      type: actionTypes.TWITTER_AUTH_SUCCESS,
      payload: socialMock,
    });
    expect(res).toMatchObject({ isLoggedIn: true });
  });
  it('should return an error message when login fails', () => {
    const res = userReducer(initialState, {
      type: actionTypes.FACEBOOK_AUTH_SUCCESS,
      payload: socialMock,
    });
    expect(res).toMatchObject({ isLoggedIn: true });
  });
  it('should return an error message when login fails', () => {
    const res = userReducer(initialState, {
      type: actionTypes.GOOGLE_AUTH_SUCCESS,
      payload: socialMock,
    });
    expect(res).toMatchObject({ isLoggedIn: true });
  });
});
describe('Profile reducer', () => {
  const profileMock = {
    username: 'admin',
    image: 'fakepath/image.jpg',
    bio: 'sample bio message',
  };

  const errorMock = { message: 'Please provide a valid username' };

  it('should return initial state if no action type provided', () => {
    const res = userReducer(initialState, {});
    expect(res).toEqual({
      profilePending: false,
      profile: {},
      profileError: null,
      updateProfilePending: false,
      updateProfileSuccess: {},
      updateProfileError: null,
    });
  });

  it('should update pending state to true', () => {
    const fetchProfileAction = {
      type: actionTypes.FETCH_PROFILE_PENDING,
    };
    const res = userReducer(initialState, fetchProfileAction);
    expect(res).toMatchObject({ profilePending: true });
  });

  it('should update profile state when request successful', () => {
    const fetchProfileAction = {
      type: actionTypes.FETCH_PROFILE_SUCCESS,
      profile: profileMock,
    };
    const res = userReducer(initialState, fetchProfileAction);
    expect(res).toMatchObject({
      profile: {
        username: 'admin',
        image: 'fakepath/image.jpg',
        bio: 'sample bio message',
      },
    });
  });

  it('should update profile error state when request fails', () => {
    const fetchProfileAction = {
      type: actionTypes.FETCH_PROFILE_ERROR,
      error: errorMock,
    };

    const res = userReducer(initialState, fetchProfileAction);
    expect(res).toMatchObject({
      profileError: { message: 'Please provide a valid username' },
    });
  });

  it('should update profile pending state when user updates profile', () => {
    const updateProfileAction = {
      type: actionTypes.UPDATE_PROFILE_PENDING,
    };
    const res = userReducer(initialState, updateProfileAction);
    expect(res).toMatchObject({ profilePending: true });
  });

  it('should update profile success state when user updates profile', () => {
    const fetchProfileAction = {
      type: actionTypes.UPDATE_PROFILE_SUCCESS,
      profile: profileMock,
    };
    const res = userReducer(initialState, fetchProfileAction);
    expect(res).toMatchObject({
      profile: {
        username: 'admin',
        image: 'fakepath/image.jpg',
        bio: 'sample bio message',
      },
    });
  });
  it('should update profile error state when request fails', () => {
    const fetchProfileAction = {
      type: actionTypes.UPDATE_PROFILE_ERROR,
      error: errorMock,
    };

    const res = userReducer(initialState, fetchProfileAction);
    expect(res).toMatchObject({
      profileError: { message: 'Please provide a valid username' },
    });
  });
});
