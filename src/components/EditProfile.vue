<template>
    <HeadLine/>
    <div class = "Container">
        <h1> Greeting! You can edit your profile here. </h1>
        <div> 
            <img src="../assets/1st_profile.png" style = "width:150px;height:150px;"/> 
        </div>

        <div class="SaveInfo">
        <form id="myProfile">
            <br><br>
            <label for="name">User Name </label> <br>
            <input type="text" id="name" required=true placeholder="Enter a New User Name" style="width:200px;height:30px"> <br> 
            
            <br><br> 
            <label for="intro">Self-Introduction</label><br>
            <input type="text" id="intro" required=true placeholder="Introduce Yourself to the Community!" style="width:600px;height:150px"> <br> 
            
            <br><br>
            <label for="prize">Prizes Won</label><br>
            <input type="text" id="prize" required=true placeholder="Enter the Prizes You Won." style="width:600px;height:150px"> <br> 
            
            <br><br>
            <label for="gender">Your gender</label><br>
            <select v-model="selected">
            <option> Female</option>
            <option> male </option>
            <option> I prefer not to say. </option>
            </select>, <br>
            

            <br><br>
            <div class="save">
                <button id="savebutton" type="button" v-on:click="savetofs()">Save </button>
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
    font-size: 18px;
    font-family: Helvetica;
    text-align: center;
    align-items: center;
    margin:auto;
}

input:hover {
    box-shadow: 5px 5px pink;
}

.Container{
    background-image: url(../assets/background2.png);

}

.savebutton{
    color: bisque;
    height: 30px;
    width: 50px;
    background-image: url(../assets/image1.png);
}


</style>



