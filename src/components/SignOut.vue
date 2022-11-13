<template>
  <button id="btn" @click="logOut()" v-if="user"> Logout </button>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
    name: 'LogOut',

    data() {
        return {
            user:false,
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                this.user = user;
            }
        })
    },

    methods: {
        logOut(){
            const auth = getAuth();
            const user = auth.currentUser;
            signOut(auth, user);
            this.$router.push({name:'HomePage'});
            location.reload();
        }
    }
}
</script>

<style scoped>
#btn{
    text-align:center;
    margin: auto;
    cursor: pointer;
    font-family: Merienda;
    padding: 8px 20px;
    border-radius: 15px;
}
#btn:hover{
    color: rgb(243, 236, 236);
    background-color: rgb(251, 122, 171);
    box-shadow:  3px 3px grey;
    border-radius: 15px;
}
</style>