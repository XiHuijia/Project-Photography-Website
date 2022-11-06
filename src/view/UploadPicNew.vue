<template>
  <div class="page">
    <form id = "myform">
        <h1>Photographic Society of South East Asia</h1>
        <div class="pic1">
            <label>Upload your photo</label>
            <input type="file" id="photo1" accept=".png, .jpg, .jpeg">
        </div>

        <div class="picInfo">
            <div class="input">
                <label>TITLE</label>
                <input type="text" id="title1" required = "" placeholder="Add title for this work">
            </div>
            <div class="input">
                <label>LOCATION</label>
                <input type="text" id="location1" required = "" placeholder="Add location for this work">
            </div>
            <div class="input">
                <label>PRICE</label>
                <input type="number" id="price1" required = "" placeholder="Add your desired price for this work">
            </div>
            <div class="input">
                <label>TAG</label>
                <input type="text" id="tag1" required = "" placeholder="Add tag for this work">
            </div>
        </div>
        <button class="btn" @click="upload()">Upload</button>
    </form>
  </div>
</template>

<script>
import firebaseApp from '../firebase.js';
import {getFirestore} from "firebase/firestore";
import {doc, setDoc} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
const db = getFirestore(firebaseApp);
const auth = getAuth();
this.fbuser = auth.currentUser.email;

export default {
    name: "UploadPicNew",
    methods: {
        async upload(){
            var pic = document.getElementById("photo1").value
            var tit = document.getElementById("title1").value
            var loc = document.getElementById("location1").value
            var pri = document.getElementById("price1").value
            var t = document.getElementById("tag1").value
            alert("Uploading photo: " + pic)
            try{
                const docRef = await setDoc(doc(db, String(this.fbuser), this.a), {
                    Photo: pic, Title: tit, Location: loc, Price: pri, Tag: t
                })
                console.log(docRef)
                document.getElementById('myform').reset();
                this.$emit("added")
            }
            catch(error) {
                console.error("Error uploading photo: ", error);
            }
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    }

}
</script>

<style scoped>
h1{
    text-align: center;
    color: black;
}
.page{
    background-image: url("../assets/background1.png");
    font-size: 20px;
    background-size: 100%;   
}

.input{
    font-size: 20px;
    display: inline-block;
    text-align: justify;
}
</style>
