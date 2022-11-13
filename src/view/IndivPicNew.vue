<template>
  <HeadLine/>
    <main class="container">
    <img id="pic1"> {{photoInfo.Photo}}>
    <div class = "text">
        <!-- <div id="author1">{{pic.Author}}</div> -->
        <div id="title1">{{this.title}}</div>
        <!-- <div id="location1">{{pic.Location}}</div> -->
        <p id="warn">The copyright and portrait rights have been authorized for personal use and corporate commercial use.</p>
        <!-- <button class="downloadPic" @click="download(pic.fileURL)">Download</button>
        <button class="purchasePic" @click="this.$router.push(PurchasePic)">Purchase</button> -->
    </div>
    </main>

    <MyFooter/>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue'
import MyFooter from '@/components/MyFooter.vue';
export default {
    data() {
        return{
            id: false,
            photo: false,
            title: false,
        }
    },

    created() {
        this.id = this.$route.params.id,
        this.photo = this.$route.params.photo,
        this.title = this.$route.params.title,
        console.log(this.title)
        console.log(this.id)
        console.log(this.photo)
    },

    
    components: {
        HeadLine,
        MyFooter,
    }
}
</script>

<style>
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