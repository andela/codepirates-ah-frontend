import * as actions from '../actionTypes';

const token = localStorage.getItem('token');
export const successViewUserFollower = () => ({
  type: actions.VIEW_USER_FOLLOWERS_SUCCESS,
  payload: data,
});
export const failedViewUserFollower = () => ({
  type: actions.VIEW_USER_FOLLOWERS_FAIL,
  payload: data,
});
const viewUserFollowers = () => (dispatch) => fetch(
  ` ${actions.BACKEND_URL_LOCAL}/api/v1/users/profiles/followers`,

  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  },
)
  .then((res) => res.json())
  .then((response) => {
    if (response.data.length !== 0) {
      return dispatch(successViewUserFollower(response));
    }
    return dispatch(failedViewUserFollower(response));
  })
  .catch((error) => error);
export default viewUserFollowers;
