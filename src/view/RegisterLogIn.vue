<template>
    <main class="Container">
      <div class="content">
        <h1>Photographic Society of South East Asia</h1>
        <h2>Register or Sign In to Your Account</h2>
        <div id="firebaseui-auth-container"></div>      
      </div>
    </main>
    <MyFooter/>
  </template>
  
  <script>
  import firebase from '@/uifire.js'
  import 'firebase/compat/auth';
  import * as firebaseui from 'firebaseui';
  import 'firebaseui/dist/firebaseui.css';
  import MyFooter from '../components/MyFooter.vue';
  
  export default {
    name:"SignIn",
    components: {
        MyFooter
    },
    mounted() {
        //calling the ui instance
        var ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui){
            //we need to create the instance only one time
            //initialize the FirebaseUI Widget using Firebase.
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        var uiConfig = {
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]
        };
        ui.start("#firebaseui-auth-container", uiConfig);
    }
}
  </script>
  
  <style scoped>
  
  .Container{
    margin-top: -90px;
    height: 700px;
    line-height: 10px;
    text-align: center;
    background-image: url("../assets/edit_profile_bg2.jpg");
    background-size: 100% 100%;
    color: #fff;
  }
  .content{
    margin-top:100px;
    height: 100px;
    font-size: larger;
    font-weight: bolder;
    text-align: center;
    font-family: Merienda;
}

h1 {
    text-align: center;
    height: 100px;
    margin-left: 180px;
    font-family: 'Kolker Brush', cursive;
    font-size: 100px;
    display: flex;
    align-items: center;
}

h2 {
    margin-top: 30px;
    margin-bottom: 80px;
}

h5 {
    margin-top: 30px;
    margin-bottom: 60px;
}

  </style>