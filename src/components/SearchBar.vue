<template>
<input type="text" v-model="input" placeholder="Search for photographs" />
<div class="tag_search" v-for="tag in filteredList()" :key="tag">
    <p>{{tag}}</p>
</div>
<div class="item_error" v-if="input&&!filteredList().length">
    <p>No results found!</p>
</div>
</template>

<script>
//import firebaseApp from '../firebase.js';
//import {getFirestore} from "firebase/firestore";
import {ref} from "vue";
//import {db} from '../firebase.js';
//import {getDoc, doc} from 'firebase/firestore';
//const db = getFirestore(firebaseApp);
let input = ref("");
//const tags = await getDoc(doc(db,"Tag"));
const tags = ["Waves", "Sea", "Myth"];

export default {

name: 'SearchBar',

methods: {
    filteredList(){
    return tags.filter((tag) => tag.toLowerCase().includes(input.value.toLowerCase()));
}
}


}

</script>

