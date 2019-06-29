import { call, put, take } from 'redux-saga/effects';
import { auth as authActions } from '../actions';
import { auth as authApis } from '../../apis';

export function* signInWithFacebook() {
  while (true) {
    try {
      const action = yield take(authActions.SIGN_IN_WITH_FACEBOOK_REQUEST);

      const response = yield call(authApis.signInWithFacebook, action.payload);

      yield put(authActions.signInWithFacebookSuccess(response.data));
    } catch (error) {
      yield put(authActions.signInWithFacebookFailure(error));
    }
  }
}
