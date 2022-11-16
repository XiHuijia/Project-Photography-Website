import { createApp } from 'vue'
//import {initializeApp} from "firebase/app"
//import Vue from "vue";
import App from './App.vue'
import router from './router/index.js'
//import firebase from 'firebase'
// import Vuex from 'vuex';
// import {store}  from './store'

// Vue.config.productionTip = false;

// Vue.use(Vuex);

// new Vue({
//     router,
//     store,
//     render: (h) => h(App),
//   }).$mount("#app");

// const firebaseConfig = {
//     apiKey: "AIzaSyCUDVuRuqdeUOr7h2JpxynS_cxdII3yjiA",
//     authDomain: "bt3103-group-project.firebaseapp.com",
//     projectId: "bt3103-group-project",
//     storageBucket: "bt3103-group-project.appspot.com",
//     messagingSenderId: "924520970735",
//     appId: "1:924520970735:web:5268e0e61be079cca91e1a"
//   };
  
//   // Initialize Firebase
//   const firebaseApp = initializeApp(firebaseConfig);
//   var db = firebase.firestore();

//   export default firebaseApp;
//   export {db};

createApp(App).use(router).mount('#app')

