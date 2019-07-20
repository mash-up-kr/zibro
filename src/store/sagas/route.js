// import { call, put, take } from 'redux-saga/effects';
// import { map } from 'lodash/fp';
// import { route as routeActions } from '../actions';
// import { firebase } from '../../utils';

// TODO:지금집으로 택시+심야버스
// export function* fetchNotifcations() {
//   while (true) {
//     try {
//       const action = yield take(routeActions.FETCH_ROUTES_REQUEST);

//       const routes = map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }), snapshot.docs);

//       yield put(routeActions.fetchRoutesSuccess({ routes }));
//     } catch (error) {
//       yield put(routeActions.fetchRoutesFailure({ error }));
//     }
//   }
// }
