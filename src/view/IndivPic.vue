<template>
    <HeadLine/>
    <main class="container">
    <img id="pic1">{{pic.file}}
    <div class = "text">
        <div id="author1">{{pic.author}}</div>
        <div id="title1">{{pic.title}}</div>
        <div id="location1">{{pic.location}}</div>
        <p id="warn">The copyright and portrait rights have been authorized for personal use and corporate commercial use.</p>
        <button class="downloadPic" @click="download(pic.fileURL)">Download</button>
        <button class="purchasePic" @click=this.$router.push(PurchasePic)>Purchase</button>
    </div>
    </main>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue'
//import PurchasePic from '@/components/PurchasePic.vue'
import { db } from "../../firebase/index";
import { ref } from "firebase/storage";
import {saveAs} from 'file-saver';
import axios from 'Axios';
import {doc, getDoc} from "firebase/firestore";


export default{
    name: "IndivPic",
    components:{
        HeadLine,
        //PurchasePic
    },
    props: ["id"],
    setup(props) {
        const pic = ref("");
        //const imgurl = ref("")
        const load = async () => {
        try {
            const res = await getDoc(doc(db, "files", props.id));
            pic.value = res.data();
        } catch (err) {
            alert(err.message);
        }
        };
        load();
    },
    method:{
        download(url) {
        axios
            .get(url, {responseType: 'blob'})
            .then(response => {
                saveAs(response.file, 'downloaded-file.pdf');
            })
    }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: auto;
}

img{
    width: 45%;
}

.text{
    font-size: 20px;
    font-display: justify;
    color: black;
}
</style>
