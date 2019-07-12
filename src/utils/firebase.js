import firebase from 'firebase/app';

const auth = {
  facebookAuthProvider: () => new firebase.auth.FacebookAuthProvider(),
  googleAuthProvider: () => new firebase.auth.GoogleAuthProvider(),
  signInWithPopup: provider => firebase.auth().signInWithPopup(provider),
};

export { auth };
