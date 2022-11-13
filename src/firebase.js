import { initializeApp } from "firebase/app";
//import {initializeFirestore} from 'firebase/firestore';
//import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATUsMADB8w26V5f3IRRgpsVsOLny8H82Q",
  authDomain: "group-project-32538.firebaseapp.com",
  projectId: "group-project-32538",
  storageBucket: "group-project-32538.appspot.com",
  messagingSenderId: "1094587824694",
  appId: "1:1094587824694:web:79793342940b71d8043697"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const db = getFirestore(firebaseApp);
// const auth = getAuth();
// const storage = getStorage(firebaseApp);

export default firebaseApp;
//export {db};
// export const db = initializeFirestore(firebaseApp, {
//   experimentalForceLongPolling: true,
//   useFetchStreams: false,
// });