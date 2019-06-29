import { auth } from '../actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action) {
    case auth.SIGN_IN_REQUEST:
      return {
        ...state,
      };
    case auth.SIGN_IN_SUCCESS:
      return {
        ...state,
      };
    case auth.SIGN_IN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
