<template>
    <HeadLine />
  <div class="page">
    <form id = "myform">
        <h1>Upload Your Work Here!</h1>
        <div class="pic1">
            <label>Your Photo</label>
            <input type="file" id="photo1" accept=".png, .jpg, .jpeg"> 
        </div>

        <div class="picInfo">
            <div class="input">
                <label>URL</label>
                <input type="text" id="url" required = "" placeholder="Add url for this work">
            </div>
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
  <MyFooter />
</template>

<script>
import firebaseApp from "../firebase.js";
import { ref, getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import firebaseApp from '../firebase.js';
import HeadLine from '@/components/HeadLine.vue'
import MyFooter from '@/components/MyFooter.vue'

const db = getFirestore(firebaseApp);
const auth = getAuth();
// const [image, setImage] = useState(null);
const storage = getStorage();
//import firebase from '../uifire.js';
//import {db} from '../firebase.js';
// import 'firebase/firestore';
// import {getFirestore} from "firebase/firestore";
// import {collection, addDoc} from "firebase/firestore";
//import {getAuth, onAuthStateChanged} from "firebase/auth";
// const db = getFirestore(firebaseApp);
//db.settings({ experimentalForceLongPolling: true, merge:true });
//const auth = getAuth();
//this.fbuser: auth.currentUser.email,
////define in the data()
//var db = firebaseApp.firestore();



export default {
    name: "UploadPicNew",
    components:{
        HeadLine,
        MyFooter
    },

    data(){
        return{
            user: false, 
            Photo: "", 
            Title: "", 
            Location: "",
            Price: "",
            Tag: "",
        }
    },

    mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        //this.userURL = user.profileiconURL;
      }
    });
  },

    methods: {
        async upload(){
            var pic = document.getElementById("photo1").value
            //var url = document.getElementById("url").value
            var tit = document.getElementById("title1").value
            var loc = document.getElementById("location1").value
            var pri = document.getElementById("price1").value
            var t = document.getElementById("tag1").value
            //var name = this.user.displayName;
            //var url = URL.createObjectURL(this.pic);
            // alert("Uploading photo: " + pic)
            //console.log(this.user.uid);
            var email = auth.user.email;
            try{
                console.log("entering try");
                // const docRef = 
                // await setDoc(doc(db, String(this.user), this.pic), {
                //     Photo: pic, Title: tit, Location: loc, Price: pri, Tag: t, //Author: name, picURL: url, 
                // });//check syntax
                // console.log(docRef);
                // alert(docRef)
                console.log(db)
                console.log(this.user.uid)
                var sysTime = new Date();
                var timeStamp = sysTime.getTime();
                var postID = email + timeStamp;
                const path = "posts/"+postID;
                const fileRef = ref(storage, path)
                console.log(fileRef)
                const docRef = setDoc(doc(db, "upload", postID),{
                    Photo: pic,
                    Title: tit,
                    Location: loc,
                    Price: pri,
                    Tag: t
                });
                console.log(docRef);

                // const docRef = {
                //     Photo: pic, 
                //     Title: tit, 
                //     Location: loc,
                //     Price: pri,
                //     Tag: t
                // }
                // await setDoc(doc(collection(db, this.user.uid)), docRef);

                // await db.collection(this.user.uid).doc(this.pic).add({
                //     Photo: pic, 
                //     Title: tit, 
                //     Location: loc,
                //     Price: pri,
                //     Tag: t
                // });

                // await db.collection("test").document("try").set({
                //     Photo: "pic", 
                //     Title: "tit", 
                //     Location: "loc",
                //     Price: "pri",
                //     Tag: "t",
                // })

                // const ref = await db.collection(String(this.user.uid)).doc("test");
                // ref.set({Photo: "pic", Title: "tit", Location: "loc", Price: "pri", Tag: "t"});
                //document.getElementById('myform').reset();
                //this.$emit("added");
                alert("Successful Upload!");
            }
            catch(error) {
                //console.error("Error uploading photo: ", error);
                alert("fail!");
            }
        }
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
    background-image: url("../assets/background1.png");
    font-size: 20px;
    background-size: 100%; 
    height: 100%;
    width: 100%;  
}

.pic1{
    font-size: 40px;
    display: inline-block;
    /*text-align: center;
    width: 100%;
    height: 100%; */
    width: 100%;
    height: 60px;
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
    /*text-align: center;
    width: 100%;
    height: 100%; */
    width: 100%;
    height: 60px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    display: center;
    align-items: center;
    align-content: center;
    padding-right: 50px;
    padding-left: 10px;
    font-family: Merienda;
    
}

/* .btn{
    font-size: 40px;
    text-align: center;
    background-color: lightpink;
} */

.btn {
  margin-top: 30px;
  border-radius: 15px;
  font-family: Merienda;
  position: relative;
  padding: 1rem 3rem;
  font-size: 18px;
  line-height: 1.5;
  color: #e55a89;
  text-decoration: none;
  text-transform: uppercase;
  background-color: lightpink;
  border: 1px solid lightpink;
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;
}

</style>
