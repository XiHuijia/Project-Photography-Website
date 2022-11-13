<template>
    <HeadLine/>
    <div class = "Container">
        <br><br>
        <h1> Greeting! You can edit your profile here. </h1>
        <div class="profile_image"> 
            <img src="@/assets/1st_profile.png"> 
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

    <MyFooter/>

</template>

<script>
import HeadLine from '@/components/HeadLine.vue';
import MyFooter from './MyFooter.vue';
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore" 
import { doc, setDoc } from "firebase/firestore"; 
const db = getFirestore(firebaseApp);
export default {
    components: {
        HeadLine,
        MyFooter
    },
    methods: {
        async savetofs(){
        var a= document.gettlementById("name").value
        var b =document.getElementById("intro").value
        var c = document.getElementById("prize").value 
        //var d = document.getElementById("quant1").value 
        alert ("Saving User: "+ a)
        try{
            const docRef = await setDoc(doc(db,"Portfolio", a),{
                name: a, intro : b, prize: c })
                console. log (docRef)
                document.getElementById('myform').reset();
                this.$emit("added")
            }
            catch(error){
                console.error("Error adding document:error", error);
            }
        }
    }
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
    width: 250px;
    height: 250px;
    margin: 50px 0 0 490px;
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
</style>

