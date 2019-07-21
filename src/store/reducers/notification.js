import produce from 'immer';
import { notification } from '../actions';

const initialState = {
  notifications: { data: null, loading: false, error: null },
  notification: { data: null, loading: false, error: null },
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case notification.FETCH_NOTIFICATIONS_REQUEST:
      draft.notifications.loading = true;
      break;
    case notification.FETCH_NOTIFICATIONS_SUCCESS:
      draft.notifications.loading = false;
      draft.notifications.data = action.payload.notifications;
      break;
    case notification.FETCH_NOTIFICATIONS_FAILURE:
      draft.notifications.loading = false;
      draft.notifications.error = action.payload.error;
      break;
    case notification.CREATE_NOTIFICATION_REQUEST:
      draft.notification.loading = true;
      break;
    case notification.CREATE_NOTIFICATION_SUCCESS:
      draft.notification.loading = false;
      draft.notification.data = true;
      break;
    case notification.CREATE_NOTIFICATION_FAILURE:
      draft.notification.loading = false;
      draft.notification.error = action.payload.error;
      break;
    case notification.INIT_NOTIFICATION:
      draft.notification = { data: null, loading: false, error: null };
      break;
    default:
  }
});

export default reducer;
