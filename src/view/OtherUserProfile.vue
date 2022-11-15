<template>
    <HeadLine/>
    <main class="container">
    <div class = "text">
        <div id="otherusername">{{username}}</div>
        <button class="follow" @click="follow(otheruser)">Follow</button>
    </div>
    </main>
    <MyFooter/>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue'
import MyFooter from '@/components/MyFooter.vue'
//import { db } from "../firebase.js";
//import { ref } from "firebase/storage";
import {doc, getDoc, addDoc} from "firebase/firestore";
import firebaseApp from '../firebase.js';
import {getFirestore} from "firebase/firestore";
const db = getFirestore(firebaseApp);


export default{
    name: "OtherUserProfile",
    components:{
        HeadLine,
        MyFooter
    },

    data(){
        return{
            email: false,
            username: false,
        }
    },

    created() {
        this.email = this.$route.params.email
        //const otheruser = ref("");
        const load = async () => {
        try {
            const res = await getDoc(doc(db, "Users", this.email));
            let value = res.data();
            console.log(value);
            this.username = value.username;
        } catch (err) {
            alert(err.message);
        }
        };
        load();
    },
    
    //props: ["uid"],
    
    // setup(props) {
    //     const otheruser = ref("");
    //     const load = async () => {
    //     try {
    //         const res = await getDoc(doc(db, "Users", props.id));
    //         otheruser.value = res.data();
    //     } catch (err) {
    //         alert(err.message);
    //     }
    //     };
    //     load();
    // },
    method:{
        async follow(otheruser) {
            try{
                await addDoc(doc(db, String(this.user.uid)), {
                    Following: otheruser
                });
            } catch(error) {
                alert("Fail to follow!");
            }
            
        }
    }
}

</script>