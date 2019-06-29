export const SIGN_IN_REQUEST = 'auth/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'auth/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'auth/SIGN_IN_FAILURE';

export const signInRequest = (payload = {}) => ({
  type: SIGN_IN_REQUEST,
  payload,
});
export const signInSuccess = (payload = {}) => ({
  type: SIGN_IN_SUCCESS,
  payload,
});
export const signInFailure = (payload = {}) => ({
  type: SIGN_IN_FAILURE,
  payload,
});
