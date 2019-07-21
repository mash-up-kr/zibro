export const FETCH_PLACES_REQUEST = 'auth/FETCH_PLACES_REQUEST';
export const FETCH_PLACES_SUCCESS = 'auth/FETCH_PLACES_SUCCESS';
export const FETCH_PLACES_FAILURE = 'auth/FETCH_PLACES_FAILURE';

export const fetchPlacesRequest = (payload = {}) => ({
  type: FETCH_PLACES_REQUEST,
  payload,
});
export const fetchPlacesSuccess = (payload = {}) => ({
  type: FETCH_PLACES_SUCCESS,
  payload,
});
export const fetchPlacesFailure = (payload = {}) => ({
  type: FETCH_PLACES_FAILURE,
  payload,
});
