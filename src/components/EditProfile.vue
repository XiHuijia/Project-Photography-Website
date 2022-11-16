<template>
    <HeadLine/>
    <div class = "Container">
        <br><br>
        <h1> Greeting! You can edit your profile here. </h1>

        <button onclick="javascript:history.back(-1);">Go Back</button>

        <div class="profile_image" v-if="this.showIcon">
            <img :src= "url" alt="Preview" id="IconImg"/>
        </div>
        <div v-else class="profile_image">
            <img src="@/assets/profilephoto.png" id="IconImg">
        </div>
        <div class = "chooseicon">
            <p>Upload New Profile Photo: </p>
            <input
            type="file"
            accept="image/*"
            class = "save2"
            id="icon"
            @change="onIconChange"
            />
            <!-- <label for="icon"><button class = "save" id="changeIconImg" @click="changeIcon()">Upload Image</button></label> -->
            <img
                :src="previewicon"
                alt="Preview"
                v-if="previewIcon"
                class="uploading-image"
                />
            <div id="changeIconBtnContainer">
                <div v-if="this.iconStatus != 'static'"><button class = "save2" id = "confirmChangeIcon" @click ="confirmChangeIcon()">Confirm Change</button></div> 
                <div v-if="this.iconStatus != 'static'"><button  class = "save2" id = "cancelChangeIcon" @click ="cancelChangeIcon()"> Cancel</button></div>
            </div>
        </div>

        <div class="SaveInfo">
            <form id="myProfile">
                <br><br>
                <label for="name">User Name </label> <br>
                <input type="text" id="name" required=true placeholder="Enter a New User Name" style="font-family: 'Noto Nastaliq Urdu', serif; width:200px;height:30px"> <br> 
                
                <br>
                <label for="gender">Your gender</label><br>
                <select v-model="selected" style="width:200px;height:30px">
                <option style="font-family: 'Noto Nastaliq Urdu', serif;width:600px;height:150px"> Female</option>
                <option style="font-family: 'Noto Nastaliq Urdu', serif;width:600px;height:150px"> Male </option>
                <option style="font-family: 'Noto Nastaliq Urdu', serif;width:600px;height:150px"> I prefer not to say. </option>
                </select>

                <br><br> 
                <label for="intro">Self-Introduction</label><br>
                <input type="text" id="intro" required=true placeholder="Introduce Yourself to the Community!" style="font-family: 'Noto Nastaliq Urdu', serif;width:600px;height:150px"> <br> 
                
                <br><br>
                <label for="prize">Prizes Won</label><br>
                <input type="text" id="prize" required=true placeholder="Enter the Prizes You Won." style="font-family: 'Noto Nastaliq Urdu', serif;width:600px;height:150px"> <br> 
                
                <br><br>
                <div>
                    <button class="save" v-on:click="savetofs()"> Save </button>
                </div>
                <br><br>
            </form>
        </div>
    </div>
    <button onclick="javascript:history.back(-1);">Go Back</button>
    <MyFooter/>

</template>

<script>
import HeadLine from '@/components/HeadLine.vue';
import MyFooter from './MyFooter.vue';
import firebaseApp from '../firebase.js';
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { getDoc, doc, getFirestore,updateDoc} from '@firebase/firestore'
import { ref, getStorage, uploadBytes, getDownloadURL} from "firebase/storage"

const db = getFirestore(firebaseApp);
const storage = getStorage();

export default {
    components: {
        HeadLine,
        MyFooter
    },
    data(){
        return {
            username:'Username',
            bio:'Bio',
            followers:[],
            following:[],
            email:'',
            userID: '',
            previewicon: null,
            icon: null,
            iconStatus : "static",
            showIcon: false,
            url: ' ',
        }
    },
    mounted(){
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user){
                this.user = user;
                this.userID = this.user.email;
                display(this, this.userID)
                getURL(this)
            }else{
                display(this, "10086")
            }
        })
        async function display(self){
            let user = await getDoc(doc(db, "Users", self.userID))
            self.username = user.data().username
            self.bio = user.data().bio
            self.following = user.data().following
            self.followers = user.data().followers
            self.email=user.data().email
            console.log(self.profileiconURL)
        }
        display(this)
        async function getURL(self){
            setTimeout(() => {
            console.log(self.email)
            console.log("getURL triggered")
            // Get URL for the image inside the storage
            const storage = getStorage();
            const starsRef = ref(storage, 'icons/'+ self.email);
            getDownloadURL(starsRef)
            .then((url) => {
            self.url = url
            self.showIcon=true
            })
            }, 500);
        }
    },
    methods: {
        onIconChange(i) {
        // const reader = new FileReader();
        let file = i.target.files[0]; // get the supplied file
        this.icon = file;
        this.previewicon = URL.createObjectURL(file);
        this.iconStatus = "changing";
        },
        confirmChangeIcon: async function() {
            const path = await this.uploadImage(this.userID);
            console.log("creating path", path)
            const docRef = await updateDoc(doc(db, "Users", this.userID), {
                profileiconURL: this.userID
            })
            setTimeout(() => {
                console.log(docRef)
                location.reload()
            }, 500)
            console.alert("Profile image changed successfully!")
        },
        async uploadImage(userID) {
        if (this.icon) {
        // var myPostID = this.post.postID
        // var myImgName = myPostID.replace(/./g, "-")
            const path = "icons/"+ userID;
            const fileRef = ref(storage, path)
        console.log(fileRef)
        await uploadBytes(fileRef, this.icon)
        .then(() => {console.log("Icon uploaded successfully to Firebase. Path" + path)})
            }
        },
        changeIcon(){
            document.getElementById("icon").click();
            document.getElementById("changeIconBtnContainer").style.display="flex"
            document.getElementById("changeIconImg").style.display="none"
        },
        cancelChangeIcon(){
            document.getElementById("changeIconImg").style.display="inline"
            document.getElementById("changeIconBtnContainer").style.display="none"
        }
    }

    // methods: {
    //     async savetofs(){
    //     var a= document.gettlementById("name").value
    //     var b =document.getElementById("intro").value
    //     var c = document.getElementById("prize").value 
    //     //var d = document.getElementById("quant1").value 
    //     alert ("Saving User: "+ a)
    //     try{
    //         const docRef = await setDoc(doc(db,"Portfolio", a),{
    //             name: a, intro : b, prize: c })
    //             console. log (docRef)
    //             document.getElementById('myform').reset();
    //             this.$emit("added")
    //         }
    //         catch(error){
    //             console.error("Error adding document:error", error);
    //         }
    //     }
    // }
}
</script>

<style scoped>
.SaveInfo {
    display: inline-block;
    font-size: 22px;
    text-align: center;
    align-items: center;
}
.profile_image {
    margin: 50px 0 0 10px;
}
.profile_image img {
        width: 20rem;
        border-radius: 50%;
    }
input:hover {
    box-shadow: 5px 5px pink;
}
.Container{
    background-image: url(../assets/edit_profile_bg2.jpg);
    background-size: cover;
    font-family: Merienda;
    color: rgb(255, 238, 246);
    text-align: center;
}
.save{
    color: rgb(244, 147, 163);
    font-size: 30px;
    padding: 10px 24px;
    font-family: Merienda;
    background: #fff;
    border-radius: 5px;
    border: 1px solid rgb(249, 251, 253);
    cursor: pointer;
}
.save:hover{        
    background: #ff5d93b3;
    color: #fff;
}

.save2{
    color: rgb(244, 147, 163);
    font-size: 10px;
    margin: 5px 5px 5px 5px;
    padding: 10px 10px;
    font-family: Merienda;
    background: #fff;
    border-radius: 5px;
    border: 1px solid rgb(249, 251, 253);
    cursor: pointer;
}
.save2:hover{        
    background: #ff5d93b3;
    color: #fff;
}

button{
    text-align:center;
    margin: 20px 0 10px 50px;
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

