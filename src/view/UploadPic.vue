<template>
  <div class="page">
    <h1>Photographic Society of South East Asia</h1>
    <div class="pic1">
        <label>Upload your photo</label>
        <input type="file" id="photo1" accept=".png, .jpg, .jpeg" @change="addFile()">
    </div>

    <div class="picInfo">
        <div class="input">
            <label>TITLE</label>
            <input type="text" id="title1" placeholder="Add title for this work">
        </div>
        <div class="input">
            <label>LOCATION</label>
            <input type="text" id="location1" placeholder="Add location for this work">
        </div>
        <div class="input">
            <label>PRICE</label>
            <input type="number" id="price1" placeholder="Add your desired price for this work">
        </div>
        <div class="input">
            <label>TAG</label>
            <input type="text" id="tag1" placeholder="Add tag for this work">
        </div>
    </div>
    <button class="btn" @click="upload()">Upload</button>
  </div>
</template>

<script>
import { collection, addDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase.js";
//import { ref } from "firebase/storage";
export default {
  name: "UploadPic",
  
  components: {
    // EditorContent,
  },
  data() {
    return {
      user: this.user,
      title: null,
      location: null,
      isEditing: true,
      price: null,
      tag: null,
      fileURL: null,
      fileName: null,
    };
  },
  mounted() {},
  methods: {
    addFile() {
      this.file = this.$refs.files[0];
      this.fileName = this.file.name;
      this.fileURL = URL.createObjectURL(this.file);
    },
    mounted(){},
    async upload() {
      try {
        // if (!this.title) {
        //   alert("Please enter the title!");
        //   return;
        // }
        // if (!this.file) {
        //   alert("Please upload a photo!");
        // }
        // const imgRef = ref(
        //   storage,
        //   "files/" + this.$store.state.user.uid + "/" + this.fileName
        // );
        
        const res = await addDoc(collection(db, "files"), {
          author: this.$store.state.username,
          authorId: this.$store.state.user.uid,
          location: this.location,
          title: this.title,
          likes: 0,
          price: this.price,
          tag: this.tag,
          date: Timestamp.fromDate(new Date()),
          photo:
            "files/" + this.$store.state.user.uid + "/" + this.fileName,
        });
        await setDoc(
          doc(db, "users/" + this.$store.state.user.uid + "/files", res.id),
          {
            id: res.id,
          }
        );
        this.$router.push({ name: "indivFilePage", params: { id: res.id } });
      } catch (e) {
        console.error(e);
        alert("Cannot upload image!");
      }
    },
  },
};
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
