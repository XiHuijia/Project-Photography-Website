import { initializeApp } from "firebase/app";
//import firebase from 'firebase';
//import {initializeFirestore} from 'firebase/firestore';
//import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { getStorage } from "firebase/storage";

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
//onst db = getFirestore(firebaseApp);
// const auth = getAuth();
// const storage = getStorage(firebaseApp);

export default firebaseApp;
//export {db};
// export const db = initializeFirestore(firebaseApp, {
//   experimentalForceLongPolling: true,
//   useFetchStreams: false,
// });