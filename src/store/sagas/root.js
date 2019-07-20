import { all, fork } from 'redux-saga/effects';
import { map } from 'lodash/fp';
import * as auth from './auth';
import * as notification from './notification';
import * as createNotification from './createNotification';


const sagas = {
  ...auth,
  ...notification,
  ...createNotification,
};

function* rootSaga() {
  yield all(map(saga => fork(saga), sagas));
}

export default rootSaga;
