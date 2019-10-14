import * as actions from '../actionTypes';

export const verifySuccess = (data) => ({
  type: actions.VERIFICATION_SUCCESS,
  payload: data,
});

export const verifyFailed = (error) => ({
  type: actions.VERIFICATION_FAILURE,
  payload: error,
});

export const verifyAccount = (token) => (dispatch) => fetch(`${actions.BASE_URL}/verifyemail?token=${token}`, {
  method: 'PUT',
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: JSON.stringify(token),
})
  .then((res) => res.json())
  .then((response) => (response.status === 200
    ? dispatch(verifySuccess(response))
    : dispatch(verifyFailed(response))))
  .catch((error) => dispatch(verifyFailed(error)));
