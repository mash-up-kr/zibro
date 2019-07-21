import { all, fork } from 'redux-saga/effects';
import { map } from 'lodash/fp';
import * as auth from './auth';
import * as location from './location';
import * as notification from './notification';
import * as route from './route';

const sagas = {
  ...auth,
  ...location,
  ...notification,
  ...route,
};

function* rootSaga() {
  yield all(map(saga => fork(saga), sagas));
}

export default rootSaga;
