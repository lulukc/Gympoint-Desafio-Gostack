import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import data from './data/sagas';

export default function* rootSaga() {
  return yield all([data, user, auth]);
}
