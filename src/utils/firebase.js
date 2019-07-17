import firebase from 'firebase/app';
import 'firebase/auth';

const auth = {
  FacebookAuthProvider: firebase.auth.FacebookAuthProvider,
  GoogleAuthProvider: firebase.auth.GoogleAuthProvider,
  signInWithPopup: (...args) => firebase.auth().signInWithPopup(...args),
  onAuthStateChanged: (...args) => firebase.auth().onAuthStateChanged(...args),
};

export { auth };
