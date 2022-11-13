import { createApp } from 'vue'
//import Vue from "vue";
import App from './App.vue'
import router from './router/index.js'
// import Vuex from 'vuex';
// import {store}  from './store'

// Vue.config.productionTip = false;

// Vue.use(Vuex);

// new Vue({
//     router,
//     store,
//     render: (h) => h(App),
//   }).$mount("#app");

createApp(App).use(router).mount('#app')
