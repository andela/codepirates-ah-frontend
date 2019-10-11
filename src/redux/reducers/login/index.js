import * as actionsTypes from '../../actions/actionTypes';
import initialState from '../../store/initialState';

const randomSpaces = (min = 1, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  let spaces = ' ';
  for (let i = 0; i < randomNumber; i += 1) {
    spaces += ' ';
  }
  return spaces;
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    case actionsTypes.LOGIN_ERROR:
      return {
        ...state,
        ...action.payload,
        message: `${action.payload.message}${randomSpaces()}`,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
