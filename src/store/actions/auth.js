export const SIGN_IN_WITH_FACEBOOK_REQUEST = 'auth/SIGN_IN_WITH_FACEBOOK_REQUEST';
export const SIGN_IN_WITH_FACEBOOK_SUCCESS = 'auth/SIGN_IN_WITH_FACEBOOK_SUCCESS';
export const SIGN_IN_WITH_FACEBOOK_FAILURE = 'auth/SIGN_IN_WITH_FACEBOOK_FAILURE';

export const signInWithFacebookRequest = (payload = {}) => ({
  type: SIGN_IN_WITH_FACEBOOK_REQUEST,
  payload,
});
export const signInWithFacebookSuccess = (payload = {}) => ({
  type: SIGN_IN_WITH_FACEBOOK_SUCCESS,
  payload,
});
export const signInWithFacebookFailure = (payload = {}) => ({
  type: SIGN_IN_WITH_FACEBOOK_FAILURE,
  payload,
});
