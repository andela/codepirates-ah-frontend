import * as actionTypes from '../actionTypes';
import * as socialAuthActions from './socialAuth';
import { fetchSucces } from '../../../__mocks__/window';

const dispatch = jest.fn(() => ({ data: {} }));
const profile = {
  username: 'admin',
  image: 'fakepath/image.jpg',
  bio: 'sample bio message',
};
describe(' SocialAuth Actions', () => {
  const error = {
    message: 'error occured',
  };


  it('should return an action if authSucces is triggered for Google new user',
    () => {
      expect(socialAuthActions.authSuccess('google', profile)).toEqual({
        type: actionTypes.GOOGLE_AUTH_SUCCESS,
        profile,
      });
    });
  it('should return an action if authSucces is triggered for facebook new User',
    () => {
      expect(socialAuthActions.authSuccess('facebook', profile))
        .toEqual({
          type: actionTypes.FACEBOOK_AUTH_SUCCESS,
          profile,
        });
    });
  it('should return an action if authSucces is triggered for twitter new User',
    () => {
      expect(socialAuthActions.authSuccess('twitter', profile))
        .toEqual({
          type: actionTypes.TWITTER_AUTH_SUCCESS,
          profile,
        });
    });

  it('should return null if authSucces is triggered for fake type',
    () => {
      expect(socialAuthActions.authSuccess('profile', profile))
        .toEqual(null);
    });
  it('should return type null if authFail is triggered for fake type',
    () => {
      expect(socialAuthActions.authFail(profile, 'profile'))
        .toEqual({
          type: null,
          payload: profile,
        });
    });

  it('should return an action if authfail is triggered for google', () => {
    expect(socialAuthActions.authFail(error, 'google')).toEqual({
      type: actionTypes.GOOGLE_AUTH_FAIL,
      payload: error,
    });
  });

  it('should return an action if authfail is triggered for facebook',
    () => {
      expect(socialAuthActions.authFail(error, 'facebook')).toEqual({
        type: actionTypes.FACEBOOK_AUTH_FAIL,
        payload: error,
      });
    });
  it('should return an action if authfail is triggered for twitter',
    () => {
      expect(socialAuthActions.authFail(error, 'twitter')).toEqual({
        type: actionTypes.TWITTER_AUTH_FAIL,
        payload: error,
      });
    });
  describe('profile fech', () => {
    it('Should test async profile fech  action success', async () => {
      window.fetch = fetchSucces;
      const response = await socialAuthActions.socialAuth('input', 'google')(dispatch);
      expect(response).toHaveProperty('data');
    });
  });
});
