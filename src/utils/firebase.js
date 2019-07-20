import firebase from 'firebase/app';
import 'firebase/auth';

const auth = {
  FacebookAuthProvider: firebase.auth.FacebookAuthProvider,
  GoogleAuthProvider: firebase.auth.GoogleAuthProvider,
  getCurrentUser: () => firebase.auth().currentUser,
  signInWithPopup: (...args) => firebase.auth().signInWithPopup(...args),
  onAuthStateChanged: (...args) => firebase.auth().onAuthStateChanged(...args),
};

const firestore = {
  doc: path => firebase.firestore().doc(path),
  collection: path => firebase.firestore().collection(path),
  getCollection: async (pathOrRef) => {
    const collection = typeof pathOrRef === 'string'
      ? firebase.firestore().collection(pathOrRef)
      : pathOrRef;
    const snapshot = await collection.get();

    return snapshot;
  },
  addDocument: async (collectionRef, data) => {
    const collection = typeof pathOrRef === 'string'
      ? firebase.firestore().collection(collectionRef)
      : collectionRef;
    const snapshot = await collection.add(data);

    return snapshot;
  },
  setDocument: async (documentRef, data, config) => {
    const document = typeof documentRef === 'string'
      ? firebase.firestore().doc(documentRef)
      : documentRef;

    const snapshot = document.set(data, config);

    return snapshot;
  },
  runTransaction: updateFunction => firebase.firestore().runTransaction(updateFunction),
};

export { auth, firestore };
