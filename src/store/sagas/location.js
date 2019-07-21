import { call, put, take } from 'redux-saga/effects';
import { location as locationApis } from '../../apis';
import { location as locationActions } from '../actions';

export function* fetchPlaces() {
  while (true) {
    try {
      const action = yield take(locationActions.FETCH_PLACES_REQUEST);
      const response = yield call(locationApis.fetchPlaces, { query: action.payload.query });

      yield put(locationActions.fetchPlacesSuccess({ places: response.data }));
    } catch (error) {
      console.log(error);
      yield put(locationActions.fetchPlacesFailure({ error }));
    }
  }
}
