export const FETCH_ROUTES_REQUEST = 'route/FETCH_ROUTES_REQUEST';
export const FETCH_ROUTES_SUCCESS = 'route/FETCH_ROUTES_SUCCESS';
export const FETCH_ROUTES_FAILURE = 'route/FETCH_ROUTES_FAILURE';

export const fetchROUTERequest = (payload = {}) => ({
  type: FETCH_ROUTES_REQUEST,
  payload,
});
export const fetchROUTESuccess = (payload = {}) => ({
  type: FETCH_ROUTES_SUCCESS,
  payload,
});
export const fetchROUTEFailure = (payload = {}) => ({
  type: FETCH_ROUTES_FAILURE,
  payload,
});
