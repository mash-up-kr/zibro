export const FETCH_ROUTES_REQUEST = 'route/FETCH_ROUTES_REQUEST';
export const FETCH_ROUTES_SUCCESS = 'route/FETCH_ROUTES_SUCCESS';
export const FETCH_ROUTES_FAILURE = 'route/FETCH_ROUTES_FAILURE';

export const fetchRoutesRequest = (payload = {}) => ({
  type: FETCH_ROUTES_REQUEST,
  payload,
});
export const fetchRoutesSuccess = (payload = {}) => ({
  type: FETCH_ROUTES_SUCCESS,
  payload,
});
export const fetchRoutesFailure = (payload = {}) => ({
  type: FETCH_ROUTES_FAILURE,
  payload,
});
