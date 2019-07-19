import firebase from 'firebase/app';
import 'firebase/auth';

const auth = {
  FacebookAuthProvider: firebase.auth.FacebookAuthProvider,
  GoogleAuthProvider: firebase.auth.GoogleAuthProvider,
  getCurrentUser: () => firebase.auth().currentUser,
  signInWithPopup: (...args) => firebase.auth().signInWithPopup(...args),
  onAuthStateChanged: (...args) => firebase.auth().onAuthStateChanged(...args),
};

const firestore = {};

export { auth, firestore };
