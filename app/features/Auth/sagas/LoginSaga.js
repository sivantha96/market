import { call, put } from 'redux-saga/effects';
import * as authService from 'app/services/api/Auth';
import { loginSuccess, loginFailure } from '../redux/actions';

export function* loginUser(action) {
  try {
    const response = yield call(
      authService.loginUser,
      action.payload.email,
      action.payload.password,
    );
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailure(error));
  }
}
