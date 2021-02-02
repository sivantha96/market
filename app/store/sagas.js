import { all } from 'redux-saga/effects';
import authSagas from 'app/features/Auth/sagas';

export default function* rootSaga() {
  yield all([...authSagas]);
}
