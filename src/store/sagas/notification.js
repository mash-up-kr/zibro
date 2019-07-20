import { call, put, take } from 'redux-saga/effects';
import { map } from 'lodash/fp';
import { notification as notificationActions } from '../actions';
import { firebase } from '../../utils';

export function* fetchNotifcations() {
  while (true) {
    try {
      const action = yield take(notificationActions.FETCH_NOTIFICATIONS_REQUEST);

      const ref = yield call(firebase.firestore.collection, '/notifications');

      const snapshot = yield call(
        firebase.firestore.getCollection,
        ref.where('user', '==', action.payload.uid).orderBy('sendAt', 'desc'),
      );

      const notifications = map(doc => ({
        id: doc.id,
        ...doc.data(),
      }), snapshot.docs);

      yield put(notificationActions.fetchNotificationsSuccess({ notifications }));
    } catch (error) {
      yield put(notificationActions.fetchNotificationsFailure({ error }));
    }
  }
}

// export function* createNotification() {
//   while (true) {
//     try {
//       const action = yield take(notificationActions.CREATE_NOTIFICATION_REQUEST);

//       const result = yield call(axios.get('', {
//         params: {
//           key: GOOGLE_MAPS_API_KEY,
//           origin: '',
//           destination: '',
//         },
//       }));
//       const snapshot = yield call(
//         firebase.firestore.addDocument,
//         firebase.firestore.collection('/routes'),
//         result.routes,
//       );

//       const notifications = map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }), snapshot.docs);

//       yield put(notificationActions.createNotificationSuccess({
//         notifications,
//       }));
//     } catch (error) {
//       yield put(notificationActions.createNotificationFailure({
//         error,
//       }));
//     }
//   }
// }
