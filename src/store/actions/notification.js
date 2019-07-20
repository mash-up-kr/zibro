export const FETCH_NOTIFICATIONS_REQUEST = 'notification/FETCH_NOTIFICATIONS_REQUEST';
export const FETCH_NOTIFICATIONS_SUCCESS = 'notification/FETCH_NOTIFICATIONS_SUCCESS';
export const FETCH_NOTIFICATIONS_FAILURE = 'notification/FETCH_NOTIFICATIONS_FAILURE';

export const fetchNotificationsRequest = (payload = {}) => ({
  type: FETCH_NOTIFICATIONS_REQUEST,
  payload,
});
export const fetchNotificationsSuccess = (payload = {}) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload,
});
export const fetchNotificationsFailure = (payload = {}) => ({
  type: FETCH_NOTIFICATIONS_FAILURE,
  payload,
});
