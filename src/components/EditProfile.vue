<template>
    <div class = "Container">
        <h1> Greeting! </h1>
        <form id="myform">

            <label for="name">User Name </label>
            <input type="text" id="name" required=true placeholder="Enter a New User Name"> <br> 
            <label for="intro">Self-Introduction</label>
            <input type="text" id="intro" required=true placeholder="Introduce Yourself to the Community!"> <br> 
            <label for="prize">Prizes Won</label>
            <input type="text" id="prize" required=true placeholder="Enter the Prizes You Won."> <br> 

            <div class="save">
                <button id="savebutton" type="button" v-on:click="savetofs()">Save </button>
            </div>
        </form>
    </div>


    <select v-model="selected">
    <option> Female</option>
    <option> male </option>
    <option> I prefer not to say. </option>
    </select>, <br>
    <span>Selected: {{ selected }}</span>

</template>

<script>
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore" 
import { doc, setDoc } from "firebase/firestore"; 
const db = getFirestore(firebaseApp);

export default {
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




