<template>
    <div class = "main">
        <h1 id="mainHead">Photographic Society of South East Asia</h1>
        <div id="pagecontent">
            Register or Sign In to Your Account
        </div>
        <div id="firebaseui-auth-container"></div>
        <h5>copyright@Photographic Society of South East Asia, 2022</h5>
    </div>
</template>

<script>
import firebase from '@/uifire.js'
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
//import 'firebaseui/dist/firebaseui.css'

export default {
    name:"SignIn",

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
                //firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]
        };
        ui.start("#firebaseui-auth-container", uiConfig)
    }
}
</script>

<style scoped>

.main{
    text-align: center;
    background-image: url("../assets/background2.png");
    background-size: 100% 100%;
}

#firebaseui-auth-container{
    margin-top: 50px;
    margin-bottom: 50px;
}

#pagecontent{
    height: 100px;
    font-size: larger;
    font-weight: bolder;
    text-align: center;
}

#mainHead{
    text-align: center;
}

h5{
    text-align: center;
}

</style>