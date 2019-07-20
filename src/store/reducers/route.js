import produce from 'immer';
import { route } from '../actions';

const initialState = {
  routes: { data: null, loading: false, error: null },
  route: { data: null, loading: false, error: null },
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case route.FETCH_ROUTES_REQUEST:
      draft.routes.loading = true;
      break;
    case route.FETCH_ROUTES_SUCCESS:
      draft.routes.loading = false;
      draft.routes.data = action.payload.routes;
      break;
    case route.FETCH_ROUTES_FAILURE:
      draft.routes.loading = false;
      draft.routes.error = action.payload.error;
      break;
    default:
  }
});

export default reducer;
