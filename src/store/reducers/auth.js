import { auth } from '../actions';

const initialState = {
  user: { data: null, loading: false, error: null },
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case auth.SIGN_IN_WITH_GOOGLE_REQUEST:
      return {
        ...state,
        user: { ...state.user, loading: true },
      };
    case auth.SIGN_IN_WITH_GOOGLE_SUCCESS:
      return {
        ...state,
      };
    case auth.SIGN_IN_WITH_GOOGLE_FAILURE:
      return {
        ...state,
        user: { ...state.user, loading: false, error: action.payload.error },
      };
    case auth.SIGN_IN_WITH_FACEBOOK_REQUEST:
      return {
        ...state,
        user: { ...state.user, loading: true },
      };
    case auth.SIGN_IN_WITH_FACEBOOK_SUCCESS:
      return {
        ...state,
      };
    case auth.SIGN_IN_WITH_FACEBOOK_FAILURE:
      return {
        ...state,
        user: { ...state.user, loading: false, error: action.payload.error },
      };
    default:
      return state;
  }
};

export default reducer;
