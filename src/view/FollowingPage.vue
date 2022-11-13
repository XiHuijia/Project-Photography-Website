<template>
    <HeadLine/>
    <div class="container">
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
    </div>
    <MyFooter/>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue';
import MyFooter from '@/components/MyFooter.vue';
import {db} from '../firebase.js';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { ref } from "vue";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { useStore } from "vuex";
import { computed} from "vue";


export default {
    name: "FollowingPage",

    components:{
        HeadLine,
        MyFooter
    },

    data(){
        return{
            len: 3,
            user: false,
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;

            }
        })
    },

  setup() {
    const myfollowing = ref([]);
    const load = async () => {
      const store = useStore();
      const followings = computed(() => store.state.user.following);
      const dbRef = collection(db, this.user.uid);
      const q = query(dbRef, where("following", "==", followings.value));
      const res = await getDocs(q);
      myfollowing.value = res.docs.map((doc) => {
        // console.log(doc.data())
        return { ...doc.data(), id: doc.id };
      });
    };
    load();
    return { myfollowing };
  }



}
</script>
