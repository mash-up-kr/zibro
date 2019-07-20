// import { call, put, take } from 'redux-saga/effects';
// import { map } from 'lodash/fp';
// import axios from 'axios';
// import { GOOGLE_MAPS_API_KEY } from '../../constants';
// import { createNotification as createNotificationActions } from '../actions';
// import { firebase } from '../../utils';

// export function* createNotification() {
//   while (true) {
//     try {
//       /* eslint-disable */
//       const action = yield take(createNotificationActions.CREATE_NOTIFICATION_REQUEST);

//       const result = yield call(axios.get('', {
//         params: {
//           key: GOOGLE_MAPS_API_KEY,
//           origin: '',
//           destination: '',
//         },
//       }));
//       // TODO: api호출
//       // const ref = yield call(firebase.firestore.collection, '/createNotification');
//       // db post
//       const snapshot = yield call(
//         firebase.firestore.addDocument,
//         firebase.firestore.collection('/routes'),
//         result.routes,
//       );

//       const notifications = map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }), snapshot.docs);

//       yield put(createNotificationActions.createNotificationSuccess({
//         notifications,
//       }));
//     } catch (error) {
//       yield put(createNotificationActions.createNotificationFailure({
//         error,
//       }));
//     }
//   }
// }
