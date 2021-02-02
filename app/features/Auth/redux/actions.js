import {
  AUTH_LOGIN,
  AUTH_SIGNUP,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from './actionTypes';

export function loginUser(payload) {
  return { type: AUTH_LOGIN, payload };
}

export function loginSuccess(payload) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: AUTH_LOGIN_FAILURE,
    payload,
  };
}

export function signupUser(payload) {
  return { type: AUTH_SIGNUP, payload };
}
