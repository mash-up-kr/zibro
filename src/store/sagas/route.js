/* eslint-disable */
import {
  all, call, put, take,
} from 'redux-saga/effects';
import {
  compose, chunk, flatten, map,
} from 'lodash/fp';
import { busStop } from '../../assets';
import { selectBusstop } from '../../utils';
import { route as routeActions } from '../actions';
import { route as routeApis } from '../../apis';

// TODO:지금집으로 택시+심야버스
export function* fetchRoutes() {
  while (true) {
    try {
      const action = yield take(routeActions.FETCH_ROUTES_REQUEST);
      const startPoint = {
        x: 126.9850380932383,
        y: 37.566567545861645
      };
      const endPoint = {
        x: 127.120775,
        y: 37.403049076341794
      };
      const startStops = selectBusstop(startPoint.x, startPoint.y, busStop);
      const endStops = selectBusstop(endPoint.x, endPoint.y, busStop);

      const responses = yield all([
        ...map(startStop => call(routeApis.fetchTaxiRoute, {
          startX: 126.9850380932383,
          startY: 37.566567545861645,
          endX: startStop.x,
          endY: startStop.y,
        }), startStops),
        ...map(endStop => call(routeApis.fetchTaxiRoute, {
          startX: endStop.x,
          startY: endStop.y,
          endX: 127.1033181463988,
          endY: 37.403049076341794,
        }), endStops),
      ]);

      const [starts, destinations] = yield compose(
        chunk(3),
        map((response) => {
          const {
            properties: { totalDistance, totalTime, taxiFare },
          } = response.data.features[0]
          return ({ totalDistance, totalTime, taxiFare });
        }),
      )(responses);

      const d = new Date();
      const midnight = d.setUTCHours(15, 30, 0, 0);

      const results = yield all(flatten(map(startStop => map(endStop => call(routeApis.fetchRoute, {
        origin: `${startStop.y},${startStop.x}`,
        destination: `${endStop.y},${endStop.x}`,
        departure_time: midnight/1000,
      }), endStops), startStops)));


      const routes = flatten(map.convert({ cap: false })(
        (result, index) => map.convert({ cap: false })(
          (r, i) => ({ ...r, start: starts[index], destination: destinations[i] }),
          result,
        ),
        chunk(3, results),
      ));

      console.log(routes)

      yield put(routeActions.fetchRoutesSuccess({ }));
    } catch (error) {
      yield put(routeActions.fetchRoutesFailure({ error }));
    }
  }
}
