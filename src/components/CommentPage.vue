<template>
<div id = "container">
    <img src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" id = "image" alt="">
    <h4 id = "comments">Comments</h4>
    <ul id = "nameTxt" v-for= "item in list"  :key= "item.name">
      <p> {{item.name}}: {{item.txt}}</p>
    </ul><br>
  
  <div id = "section1">
  <label for="name" id = "enterDisplayName">Your Display Name:</label>
  <input type = "text" id = "displayName" placeholder="Username" v-model= "displayname"> <br>
  </div>

  <div id = "section2">
  <label for="comment" id = "yourComment">Your Comment:</label>
  <textarea v-model = "comm" type="text" id="comment" required="" placeholder="Enter your comment">
  </textarea><br><br>
  </div><br>

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
#container{
  height: 300px;
  margin-left: 150px;
  font-family: Merienda;

}
#image {
  height: 30px;
  width: 30px;
  float: left;
  margin-left: 50px;
  margin-right: 2px;
  margin-top: -5px;
}
#comments {
  font-family: Merienda;
  margin-left: 50px;
  text-align: left;
  margin-bottom: -10px;
}

#nameTxt {
  font-family: Merienda;
  text-align: left;
  margin-left: 10px;
}

#section1 {
  margin-bottom: 10px;
}
#enterDisplayName {
  font-family: Merienda;
  font: bold;
  text-align: left;
  float: left;
  margin-left: 50px;

}
#displayName {
  font-family: Merienda;
  text-align: left;
  float: left;
  margin-left: 10px;
  align: left;
}
#yourComment {
  font-family: Merienda;
  float: left;
  margin-left: 50px;
  text-align: left;
}
#comment {
  font-family: Merienda;
  float: left;
  margin-left: 46px;
}
textarea {
  font-family: Merienda;
  width: 40%;
  height: 50px;
  text-align: left;
}
textarea:hover{
  font-family: Merienda;
  box-shadow: 3px 3px grey;
  border-radius: 2px
}
input:hover {
  font-family: Merienda;
  box-shadow: 3px 3px grey;
  border-radius: 2px
}
#savebutton{
  font-family: Merienda;
  float: left;
  margin-left: 50px;
  background-color: black;
  color:white;
  font-size: 15px;
  text-align: center;
  width: 80px;
  height: 30px;
  float: left
}
#savebutton:hover{
  font-family: Merienda;
  float: left;
  margin-left: 50px;
  background-color: rgb(34, 33, 33);
  color:white;
  font-size: 15px;
  text-align: center;
  width: 80px;
  height: 30px;
  float: left
}

</style>