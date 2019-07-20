export const FETCH_NOTIFICATIONS_REQUEST = 'notification/FETCH_NOTIFICATIONS_REQUEST';
export const FETCH_NOTIFICATIONS_SUCCESS = 'notification/FETCH_NOTIFICATIONS_SUCCESS';
export const FETCH_NOTIFICATIONS_FAILURE = 'notification/FETCH_NOTIFICATIONS_FAILURE';

export const CREATE_NOTIFICATION_REQUEST = 'notification/CREATE_NOTIFICATION_REQUEST';
export const CREATE_NOTIFICATION_SUCCESS = 'notification/CREATE_NOTIFICATION_SUCCESS';
export const CREATE_NOTIFICATION_FAILURE = 'notification/CREATE_NOTIFICATION_FAILURE';

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

export const createNotificationRequest = (payload = {}) => ({
  type: CREATE_NOTIFICATION_REQUEST,
  payload,
});
export const createNotificationSuccess = (payload = {}) => ({
  type: CREATE_NOTIFICATION_SUCCESS,
  payload,
});
export const createNotificationFailure = (payload = {}) => ({
  type: CREATE_NOTIFICATION_FAILURE,
  payload,
});
