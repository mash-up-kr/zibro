export const CREATE_NOTIFICATION_REQUEST = 'createNotification/CREATE_NOTIFICATION_REQUEST';
export const CREATE_NOTIFICATION_SUCCESS = 'createNotification/CREATE_NOTIFICATION_SUCCESS';
export const CREATE_NOTIFICATION_FAILURE = 'createNotification/CREATE_NOTIFICATION_FAILURE';

export const createNotificationRequest = (payload = {}) => ({
  type: CREATE_NOTIFICATION_REQUEST,
  payload,
});
export const createNotificationSuccess = (payload = {}) => ({
  type: CREATE_NOTIFICATION_SUCCESS,
  payload,
});
export const ceateNotificationFailure = (payload = {}) => ({
  type: CREATE_NOTIFICATION_FAILURE,
  payload,
});
