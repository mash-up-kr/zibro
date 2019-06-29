import { all, fork } from 'redux-saga/effects';
import { map } from 'lodash/fp';
import * as auth from './auth';

const sagas = {
  ...auth,
};

function* rootSaga() {
  yield all(map(saga => fork(saga), sagas));
}

export default rootSaga;
