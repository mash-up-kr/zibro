import produce from 'immer';
import { createNotification } from '../actions';

const initialState = {
  createNotification: {
    data: null,
    loading: false,
    error: null,
  },
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case createNotification.CREATE_NOTIFICATION_REQUEST:
      draft.createNotification.loading = true;
      break;
    case createNotification.CREATE_NOTIFICATION_SUCCESS:
      draft.createNotification.loading = false;
      draft.createNotification.data = action.payload.createNotification;
      break;
    case createNotification.CREATE_NOTIFICATION_FAILURE:
      draft.createNotification.loading = false;
      draft.createNotification.error = action.payload.error;
      break;
    default:
  }
});

export default reducer;
