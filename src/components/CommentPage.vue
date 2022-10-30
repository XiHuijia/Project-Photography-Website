<template>
  <div class = "comment">
    <p>Comments</p>
    <ul v-for= "item in list"  :key= "item.name">
      <p> <strong>{{item.name}}: </strong>{{item.txt}}</p> <br><br>
    </ul>
  </div>
  <div class ="container">
    Your Display Name:
    <input type = "text" placeholder="username" v-model= "displayname"> <br>
    <p>Your Comment:</p>
    <textarea v-model = "comm" type="text" id="comment" required="" placeholder="Enter your comment">
    </textarea><br><br>
    <button id = "savebutton" type = "button" v-on:click="saveofs()"> Comment </button>
  </div>
</template>


<script>
console.log("in comment")

import {getAuth, onAuthStateChanged} from "firebase/auth"


// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



export default {
  data() {
        return {
            user:false,
            list: [
              { name: "Lily", txt: "Nice Photo!"},
            ],
            displayname: "",
            comm: "",
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
    saveofs() {
      var usercom = {
        name: this.displayname,
        txt: this.comm
      }

      this.list.unshift(usercom);
      this.displayname = ""
      this.comm = ""
    }
      }
    
    }

</script>


<style scoped>
.comment {
  align: left;
}
.container {
  align: left;
}
p {
  font: Helvetica;
  text-align:left;
}
textarea {
  width: 60%;
  height: 100px;
  text-align: left;
}
textarea:hover{
  box-shadow: 3px 3px grey;
  border-radius: 2px
}
input:hover {
  box-shadow: 3px 3px grey;
  border-radius: 2px
}
.savebutton{
text-align: center ;
}
</style>