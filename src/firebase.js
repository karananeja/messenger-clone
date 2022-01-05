import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDuf0vODodCaShhNgonFSlpcktg-ygwuQE',
  authDomain: 'rt-messenger-clone.firebaseapp.com',
  projectId: 'rt-messenger-clone',
  storageBucket: 'rt-messenger-clone.appspot.com',
  messagingSenderId: '20910591761',
  appId: '1:20910591761:web:bc491918d39db5c445c6b0',
  measurementId: 'G-55KXL5RD3Z',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
