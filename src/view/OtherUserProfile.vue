<template>
    <HeadLine/>
    <main class="container">
    <div class = "text">
        <div id="otherusername">{{otheruser.Displayname}}</div>
        <button class="follow" @click="follow(otheruser)">Follow</button>
    </div>
    </main>
    <MyFooter/>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue'
import MyFooter from '@/components/MyFooter.vue'
import { db } from "../firebase.js";
import { ref } from "firebase/storage";
import {doc, getDoc, addDoc} from "firebase/firestore";


export default{
    name: "OtherUserProfile",
    components:{
        HeadLine,
        MyFooter
    },
    props: ["uid"],
    setup(props) {
        const otheruser = ref("");
        const load = async () => {
        try {
            const res = await getDoc(doc(db, "users", props.id));
            otheruser.value = res.data();
        } catch (err) {
            alert(err.message);
        }
        };
        load();
    },
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