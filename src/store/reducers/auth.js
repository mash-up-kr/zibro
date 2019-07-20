import produce from 'immer';
import { auth } from '../actions';

const initialState = {
  user: { data: null, loading: false, error: null },
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case auth.SIGN_IN_WITH_GOOGLE_REQUEST:
      draft.user.loading = true;
      break;
    case auth.SIGN_IN_WITH_GOOGLE_SUCCESS:
      draft.user.loading = false;
      break;
    case auth.SIGN_IN_WITH_GOOGLE_FAILURE:
      draft.user.loading = false;
      draft.user.error = action.payload.error;
      break;
    case auth.SIGN_IN_WITH_FACEBOOK_REQUEST:
      draft.user.loading = true;
      break;
    case auth.SIGN_IN_WITH_FACEBOOK_SUCCESS:
      draft.user.loading = false;
      break;
    case auth.SIGN_IN_WITH_FACEBOOK_FAILURE:
      draft.user.loading = false;
      draft.user.error = action.payload.error;
      break;
    default:
  }
});

export default reducer;
