import profileReducer from './profileReducer';
import * as actionTypes from '../../actions/actionTypes';

describe('Profile reducer', () => {
  const initialState = {
    profilePending: false,
    profile: {},
    profileError: null,
    updateProfilePending: false,
    updateProfileSuccess: {},
    updateProfileError: null,
  };

  const profileMock = {
    username: 'admin',
    image: 'fakepath/image.jpg',
    bio: 'sample bio message',
  };

  const errorMock = { message: 'Please provide a valid username' };

  it('should return initial state if no action type provided', () => {
    const res = profileReducer(initialState, {});
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
    const res = profileReducer(initialState, fetchProfileAction);
    expect(res).toMatchObject({ profilePending: true });
  });

  it('should update profile state when request successful', () => {
    const fetchProfileAction = {
      type: actionTypes.FETCH_PROFILE_SUCCESS,
      profile: profileMock,
    };
    const res = profileReducer(initialState, fetchProfileAction);
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

    const res = profileReducer(initialState, fetchProfileAction);
    expect(res).toMatchObject({
      profileError: { message: 'Please provide a valid username' },
    });
  });

  it('should update profile pending state when user updates profile', () => {
    const updateProfileAction = {
      type: actionTypes.UPDATE_PROFILE_PENDING,
    };
    const res = profileReducer(initialState, updateProfileAction);
    expect(res).toMatchObject({ profilePending: true });
  });

  it('should update profile success state when user updates profile', () => {
    const fetchProfileAction = {
      type: actionTypes.UPDATE_PROFILE_SUCCESS,
      profile: profileMock,
    };
    const res = profileReducer(initialState, fetchProfileAction);
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

    const res = profileReducer(initialState, fetchProfileAction);
    expect(res).toMatchObject({
      profileError: { message: 'Please provide a valid username' },
    });
  });
});
