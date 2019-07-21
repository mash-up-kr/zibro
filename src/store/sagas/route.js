/* eslint-disable */
import {
  all, call, put, take,
} from 'redux-saga/effects';
import {
  compose, chunk, flat, map,
} from 'lodash/fp';
import { busStop } from '../../assets';
import { selectBusstop } from '../../utils';
import { route as routeActions } from '../actions';
import { route as routeApis } from '../../apis';

// TODO:지금집으로 택시+심야버스
export function* fetchRoutes() {
  while (true) {
    try {
      /* eslint-disable no-unused-vars */
      const action = yield take(routeActions.FETCH_ROUTES_REQUEST);

      const startStops = selectBusstop(126.9850380932383, 37.566567545861645, busStop);
      const endStops = selectBusstop(127.1033181463988, 37.403049076341794, busStop);

      // const responses = yield all([
      //   ...map(startStop => call(routeApis.fetchTaxiRoute, {
      //     startX: 126.9850380932383,
      //     startY: 37.566567545861645,
      //     endX: startStop.x,
      //     endY: startStop.y,
      //   }), startStops),
      //   ...map(endStop => call(routeApis.fetchTaxiRoute, {
      //     startX: endStop.x,
      //     startY: endStop.y,
      //     endX: 127.1033181463988,
      //     endY: 37.403049076341794,
      //   }), endStops),
      // ]);

      const res = yield call(routeApis.fetchTaxiRoute, {
        startX: 126.9850380932383,
        startY: 37.566567545861645,
        endX: startStops[0].x,
        endY: startStops[0].y,
      });

      console.log('res', res);

      // const [starts, destinations] = compose(
      //   chunk(2),
      //   map((response) => {
      //     const {
      //       features: { properties: { totalDistance, totalTime, taxiFare } },
      //     } = response.data;

      //     return ({ totalDistance, totalTime, taxiFare });
      //   }),
      // )(responses);

      // const results = yield all(flat(map(startStop => map(endStop => call(routeApis.fetchRoute, {
      //   origin: `${startStop.x},${startStop.y}`,
      //   destination: `${endStop.x},${endStop.y}`,
      //   departure_time: Date.now(),
      // }), endStops), startStops)));

      // const routes = flat(map.convert({ cap: false })(
      //   (result, index) => map.convert({ cap: false })(
      //     (r, i) => ({ ...r, start: starts[index], destination: destinations[i] }),
      //     result,
      //   ),
      //   [chunk(3, results)],
      // ));


      // console.log('routes', routes);

      yield put(routeActions.fetchRoutesSuccess({ }));
    } catch (error) {
      console.log('error', error);
      yield put(routeActions.fetchRoutesFailure({ error }));
    }
  }
}
