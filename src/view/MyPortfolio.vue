<template>
  <HeadLine/>
  <button onclick="javascript:history.back(-1);">Go Back</button>
  <div class="photo-list">
    <div class="grouping-name">
        {{ this.user.displayName }}'s Works
        </div>
        <div class="photo-list-main">
          
          <div class="photo-list-item" @click="goDetail(info.id, info.photoName, info.img, info.author, info.email, info.tag, info.price, info.loc)"  v-for="info in list" :key="info.id"
                 :style="{background: 'url(' + info.img + ')'}">
          <div class="photo-name">{{ info.photoName }}</div>
          <div class="read-more">Read More</div>
          </div>
        </div>
    </div>
    <button @click="jumpPage('UploadPicNew')">Upload</button>
    <button onclick="javascript:history.back(-1);">Go Back</button>
  <MyFooter/>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue';
import MyFooter from '@/components/MyFooter.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { collection, getDocs} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import { ref, getStorage, getDownloadURL} from "firebase/storage"
import { useRouter } from "vue-router";
export default {
    name: 'MyPortfolio',
    components: {
      HeadLine,
      MyFooter,
    },
    setup() {
    const router = useRouter();
    const jumpPage = (name) => {
      router.push({
        name,
      });
    };
      return {router,jumpPage}
    },

    data() {
        return {
            user:false,
            list:[]
        }
    },

    methods: {
        goDetail (id, name, image, author, email, tag, price, location) {
            console.log("go to detail page")
            console.log(id, name, image)
            this.$router.push({name: 'IndivPicDynamic', params: { id:id, photo: image, title:name,
            author: author, email: email, tag: tag, location: location, price: price }})
        }
    },

    mounted(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user) {
          this.user = user;
          display(this)
        }
      });
 
    async function display(user){
      let z = await getDocs(collection(db, user.user.uid))    
    let ind = 1
    z.forEach((docs) => {
      let yy = docs.data()
      console.log(yy)
      var title = (yy.Title)
      var location = (yy.Location)
      var price = (yy.Price)
      var tag = (yy.Tag)
      var email = (yy.Email)
      // get display name
      var author = user.user.displayName
      console.log(author)
      //get photo path from storage
      var photo = (yy.Photo)
      const storage = getStorage();
      const starsRef = ref(storage, 'uploads/'+ email + '/' + photo);
      getDownloadURL(starsRef).then((url) => {
                console.log('get url' + url)
                console.log(user.list)
                user.list.push({photoName: title, id: ind, img: url, loc: location, price: price, tag: tag, email: email,  author: author})
                console.log(user.list)
      })
      
      ind++;
         
    }) 
    console.log(user.list)
  }
  },
}
</script>

 <style lang="less" scoped>
 .photo-list {
            text-align: center;
            width: 1300px;
            padding-bottom: 90px;
            font-family: Merienda;
            background-color: rgba(244, 205, 205, 0.098);
            margin: auto;

                .grouping-name {
                    margin: 10px 0 40px 0;
                    font-size: 36px;
                    letter-spacing: 0 !important;
                }
                .photo-list-main {
                    display: flex;
                    flex-wrap: wrap;
                    
                    .photo-list-item {
                        height: 120px;
                        width: 380px;
                        margin: 10px;
                      //   padding-bottom: 10px;
                        padding-top: 178px;
                        padding-left: 30px;
                        color: rgb(247, 244, 244);
                        font-size: 40px;
                        text-align: center;
                        flex-shrink: 0;
                        &:nth-child(3n) {
                            margin-right: 0;
                        }
                        .photo-name {
                            font-size: 30px;
                            font-weight: bold;
                            width:200px;
                            margin-bottom: 5px;
                            background-color: rgba(157, 118, 118, 0.311);
                            border-radius: 5px;
                        }
                        .read-more {
                            font-size: 15px;
                            width: 105px;
                            height: 33px;
                            border: 1px solid #fff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 5px;
                            &:hover {
                                background: #fff;
                                color: #000;
                                font-weight: bold;
                                cursor: pointer;
                            }
                        }
                    }
                
            }
        }

button{
    text-align:center;
    margin: 10px 10px 10px 10px;
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