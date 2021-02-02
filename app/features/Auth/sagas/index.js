import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../redux/actionTypes';
import { loginUser } from './LoginSaga';

const authSagas = [takeEvery(actionTypes.AUTH_LOGIN, loginUser)];

export default authSagas;
