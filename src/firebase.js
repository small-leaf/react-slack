import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBasD0NvYYff-0FsVMn46okcUQvEPDDRak",
  authDomain: "react-slack-12f65.firebaseapp.com",
  projectId: "react-slack-12f65",
  storageBucket: "react-slack-12f65.appspot.com",
  messagingSenderId: "783609990785",
  appId: "1:783609990785:web:80503d81e546870bed8780"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };