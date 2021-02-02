import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
} from './actionTypes';

const initialState = {
  userLoggedIn: false,
  user: {},
};

export const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return { ...state, user: action.payload };

    case AUTH_LOGIN_FAILURE:
      break;

    case AUTH_LOGIN_SUCCESS:
      return { ...state, user: action.payload, userLoggedIn: true };

    default:
      return state;
  }
};
