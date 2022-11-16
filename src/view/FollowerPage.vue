<template>
    <HeadLine/>
    <div class="container">
        <div class="title">My Followers</div>
        <div class="title">User Following</div>
            <div id="followerlist" v-for="fol in myfollower" :key="fol" @click="goAuthorProfile(fol)">
                <p>{{fol}}</p>
            </div>
        <button onclick="javascript:history.back(-1);">Go Back</button>
    </div>
    <!-- <div class="container">
        <div v-if="myfollowing.length === 0" class="reminder-text">
            <p>
                You haven't follow anyone yet!
            </p>
            <br>
            <p>
                <router-link to="/follow">
                Start following your favourtie artists from today!</router-link>
            </p>
        </div>
        <div  v-else>
            
            <div v-for="fol in myfollowing.slice(0,len)" :key="fol.id">
                <p>{{fol}}</p>
            </div>
            
        </div>   
    </div> -->
    <MyFooter/>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue';
import MyFooter from '@/components/MyFooter.vue';
import {getAuth, onAuthStateChanged} from "firebase/auth";
// import { ref } from "vue";
// import { collection, getDocs, query, where } from "@firebase/firestore";
// import { useStore } from "vuex";
// import { computed} from "vue";
import firebaseApp from "../firebase.js";
import {getFirestore, doc, getDoc} from "firebase/firestore";
const db = getFirestore(firebaseApp);


export default {
    name: "FollowingPage",

    components:{
        HeadLine,
        MyFooter
    },

    data(){
        return{
            user: false,
            myfollower: [],
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                display(this);

            }
        });

        async function display(foli) {
            let user = await getDoc(doc(db, "Users", foli.user.email));
            foli.myfollower = user.data().followers;
            console.log(foli.myfollower)
        }

    },

    methods: {
        goAuthorProfile(email){
            console.log("go user profile")
            this.$router.push({name: 'OtherUserProfile', params: { email: email }})
        },
    }

    


}
</script>

<style lang="less" scoped>
.container {
    margin: 0 auto;
    max-width: 93.5rem;
    background-image: url(https://img.freepik.com/free-vector/hand-drawn-minimal-background_23-2148999828.jpg?w=2000);
    background-size: cover;
    font-family: Merienda;
    color: rgb(20, 19, 20);
    text-align: center;
}

.title {
    font-size: 30px;
}

button{
    text-align:center;
    margin: auto;
    cursor: pointer;
    font-family: Merienda;
    padding: 8px 20px;
    border-radius: 15px;
}
button:hover{
    color: rgb(243, 236, 236);
    background-color: rgb(251, 122, 171);
    box-shadow:  3px 3px grey;
    border-radius: 15px;
}
</style>