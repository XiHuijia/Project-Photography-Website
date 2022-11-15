import { initializeApp } from "firebase/app";
//import firebase from "./firebase";
//import 'firebase/firestore';
//import {initializeFirestore} from 'firebase/firestore';
//import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { getStorage } from "firebase/storage";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

//const firebase = require("firebase");
// Required for side-effects
//require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCUDVuRuqdeUOr7h2JpxynS_cxdII3yjiA",
  authDomain: "bt3103-group-project.firebaseapp.com",
  projectId: "bt3103-group-project",
  storageBucket: "bt3103-group-project.appspot.com",
  messagingSenderId: "924520970735",
  appId: "1:924520970735:web:5268e0e61be079cca91e1a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);
//const db = getFirestore(firebaseApp);
// const auth = getAuth();
// const storage = getStorage(firebaseApp);
//var db = firebase.firestore();

export default firebaseApp;
//export {db};
// export const db = initializeFirestore(firebaseApp, {
//   experimentalForceLongPolling: true,
//   useFetchStreams: false,
// });
//export {db};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();


// export { auth };
// export default db; 