import * as actionsTypes from '../actionTypes';

const saveLoggedInUser = (user) => ({
  type: actionsTypes.SAVE_USER_IN_THE_STORE,
  payload: user,
});
export default saveLoggedInUser;
