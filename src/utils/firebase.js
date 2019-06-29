import firebase from 'firebase/app';

const auth = {
  facebookAuthProvider: () => new firebase.auth.FacebookAuthProvider(),
  signInWithPopup: provider => firebase.auth().signInWithPopup(provider),
};

export { auth };
