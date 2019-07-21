import produce from 'immer';
import { location } from '../actions';

const initialState = {
  places: { data: null, loading: false, error: null },
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case location.FETCH_LOCATIONS_REQUEST:
      draft.places.loading = true;
      break;
    case location.FETCH_LOCATIONS_SUCCESS:
      draft.places.loading = false;
      break;
    case location.FETCH_LOCATIONS_FAILURE:
      draft.places.loading = false;
      draft.places.error = action.payload.error;
      break;
    default:
  }
});

export default reducer;
