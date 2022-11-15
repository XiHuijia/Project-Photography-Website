import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCUDVuRuqdeUOr7h2JpxynS_cxdII3yjiA",
  authDomain: "bt3103-group-project.firebaseapp.com",
  projectId: "bt3103-group-project",
  storageBucket: "bt3103-group-project.appspot.com",
  messagingSenderId: "924520970735",
  appId: "1:924520970735:web:5268e0e61be079cca91e1a"
};


firebase.initializeApp(firebaseConfig);

export default firebase;