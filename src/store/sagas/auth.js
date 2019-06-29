import { call, put, take } from 'redux-saga/effects';
import { auth as authActions } from '../actions';
import { firebase } from '../../utils';

export function* signInWithFacebook() {
  while (true) {
    try {
      yield take(authActions.SIGN_IN_WITH_FACEBOOK_REQUEST);

      const authProvider = firebase.auth.facebookAuthProvider();

      const result = yield call(firebase.auth.signInWithPopup, authProvider);

      const user = {
        accessToken: result.credential.accessToken,
        user: result.user,
      };

      yield put(authActions.signInWithFacebookSuccess(user));
    } catch (error) {
      yield put(authActions.signInWithFacebookFailure(error));
    }
  }
}
