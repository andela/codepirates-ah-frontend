import * as profileActions from './profileAction';

describe('thunk middleware function', () => {
  it('should return pending action type', () => {
    const actionType = 'FETCH_PROFILE_PENDING';
    expect(profileActions.fetchProfilePending().type).toEqual(actionType);
  });
  it('should return success action type', () => {
    const actionType = 'FETCH_PROFILE_SUCCESS';
    const profile = {
      username: 'admin',
      image: 'image.jpeg',
      bio: 'sample bio',
    };
    expect(profileActions.fetchProfileSuccess(profile).type).toEqual(actionType);
    expect(profileActions.fetchProfileSuccess(profile).profile).toEqual(profile);
  });
  it('should return error action type', () => {
    const actionType = 'FETCH_PROFILE_ERROR';
    const error = {
      message: 'Internal server error',
    };
    expect(profileActions.fetchProfileError(error).type).toEqual(actionType);
    expect(profileActions.fetchProfileError(error).error).toEqual(error);
  });
  it('should return update profile pending action type', () => {
    const actionType = 'UPDATE_PROFILE_PENDING';
    expect(profileActions.updateProfilePending().type).toEqual(actionType);
  });
  it('should return update profile success action type', () => {
    const actionType = 'UPDATE_PROFILE_SUCCESS';
    const profile = {
      username: 'admin',
      image: 'image.jpeg',
      bio: 'sample bio',
    };
    expect(profileActions.updateProfileSuccess(profile).type).toEqual(actionType);
    expect(profileActions.updateProfileSuccess(profile).profile).toEqual(profile);
  });
  it('should return update profile success action type', () => {
    const actionType = 'UPDATE_PROFILE_ERROR';
    const error = {
      message: 'Internal server error',
    };
    expect(profileActions.updateProfileError(error).type).toEqual(actionType);
    expect(profileActions.updateProfileError(error).error).toEqual(error);
  });
});
