<template>
    <HeadLine/>
  <div class="page">
    <form id = "myform">
        <h1>Upload Your Work Here!</h1>
        <div class="pic1">
            <label>Your Photo</label>
            <br>
            <input type="file" id="photo1" accept=".png, .jpg, .jpeg" @change="onIconChange"> 
        </div>

        <div class="picInfo">
            <div class="input">
                <label>TITLE</label>
                <br>
                <input type="text" id="title1" required = "" placeholder="Add title for this work">
            </div>
            <div class="input">
                <label>LOCATION</label>
                <br>
                <input type="text" id="location1" required = "" placeholder="Add location for this work">
            </div>
            <div class="input">
                <label>PRICE</label>
                <br>
                <input type="number" id="price1" required = "" placeholder="Add your desired price for this work">
            </div>
            <div class="input">
                <label>TAG</label>
                <br>
                <select required v-model="tag1" id="tag1">
                    <option>Animal</option>
                    <option>Architecture</option>
                    <option>Landscape</option>
                    <option>People</option>
                    <option>Cartoon</option>
                    <option>Other</option>
                </select>
            </div>
        </div>
        <button class="button" type="button" @click="upload()">Upload</button>
    </form>
  </div>
  <MyFooter />
</template>

<script>
import HeadLine from '@/components/HeadLine.vue';
import MyFooter from '@/components/MyFooter.vue';
import firebaseApp from '../firebase.js';
import 'firebase/firestore';
import {getFirestore} from "firebase/firestore";
import {doc, setDoc, updateDoc, getDoc} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { ref, getStorage, uploadBytes} from "firebase/storage"
const db = getFirestore(firebaseApp);
const storage = getStorage();
export default {
    name: "UploadPicNew",
    components: {
        HeadLine,
        MyFooter
    },

    data(){
        return{
            user:false,
            image: null,
            post: 0,
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                this.userID = this.user.email;
            }
        })
    },


    methods: {
        onIconChange(i) {
        let file = i.target.files[0]; // get the supplied file
        this.image = file;
        },
        async upload(){
            var pic = document.getElementById("photo1").value
            var tit = document.getElementById("title1").value
            var loc = document.getElementById("location1").value
            var pri = document.getElementById("price1").value
            var t = document.getElementById("tag1").value
            var name = this.user.displayName
            try{
                console.log("entering try");
                const path = await this.uploadImage(this.userID, pic);
                console.log("creating path", path)
                const docRef = await setDoc(doc(db, String(this.user.uid), pic), {
                                Photo: pic, Title: tit, Location: loc, Price: pri, Tag: t, Email: this.user.email, Author: name, 
                            });
                await setDoc(doc(db,String(t), pic), {
                    Photo: pic, Title: tit, Location: loc, Price: pri, Tag: t, Email: this.user.email, Author: name,
                });
                await setDoc(doc(db,'photos', pic), {
                    Photo: pic, Title: tit, Location: loc, Price: pri, Tag: t, Email: this.user.email, Author: name,
                });

                let user = await getDoc(doc(db, "Users", this.userID))
                console.log(user)
                this.post = user.data().posts +1
                console.log(this.post)

                await updateDoc(doc(db, 'Users', this.user.email), {
                    posts: this.post
                })
                // console.log(db)
                console.log(this.user.uid)
                alert("Successfully Uploaded!");
                setTimeout(() => {
                    console.log(docRef)
                    location.reload()
                }, 500)
            }
            catch(error) {
                console.error("Error uploading photo: ", error);
                alert("fail!");
            }
        },
        async uploadImage(userID, pic) {
            const path = "uploads/"+ String(userID) + "/" + pic;
            const fileRef = ref(storage, path)
            console.log(fileRef)
            await uploadBytes(fileRef, this.image)
            .then(() => {console.log("Photo uploaded successfully to Firebase. Path" + path)})
        },
    }
}
</script>

<style scoped>
h1{
    
    text-align: center;
    color: #e55a89;
    font-family: Merienda;
}
.page{
    padding: 20px 0 40px 0;
    background-image: url("../assets/background3.jpg");
    font-size: 20px;
    background-size: 100%; 
    height: 100%;
    width: 100%;  
}

.pic1{
    font-size: 40px;
    display: inline-block;
    width: 600px;
    height: 60px;
    margin: 10px 0 0 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    display: center;
    align-items: center;
    align-content: center;
    padding-right: 50px;
    padding-left: 10px;
    font-family: Merienda;
}

.input{
    font-size: 40px;
    display: inline-block;
    width: 250px;
    height: 60px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    display: center;
    align-items: center;
    align-content: center;
    padding-right: 50px;
    padding-left: 10px;
    font-family: Merienda;
    margin: 40px 0 10px 0;
}

button{
    text-align:center;
    margin: 50px 0 40px 10px;
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

input:hover {
    box-shadow: 5px 5px pink;
    border-radius: 5px;
}

option {
    font-family: Merienda;
}

</style>
