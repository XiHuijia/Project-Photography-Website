<template>
  <HeadLine/>
  <div class="photo-list">
    <div class="grouping-name">
        {{ this.user.displayName }}'s Works
        </div>
        <div class="photo-list-main">
          <div class="photo-list-item" v-for="info in list" :key="info.id"
                 :style="{background: 'url(' + info.img + ')'}">
          <div class="photo-name">{{ info.photoName }}</div>
          <div class="read-more">Read More</div>
          </div>
        </div>
    </div>
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

export default {
    name: 'MyPortfolio',

    components: {
      HeadLine,
      MyFooter,
    },

    data() {
        return {
            user:false,
            list: [],

        }
    },

    mounted(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user) {
          this.user = user;
          display(user)
        }
    });

    async function display(user){
    let z = await getDocs(collection(db, user.uid))    
    let ind = 1

    z.forEach((docs) => {
      let yy = docs.data()
      console.log(yy)
      var photo = (yy.Photo)
      console.log(photo)
      var title = (yy.Title)
      console.log(title)
      var location = (yy.Location)
      console.log(location)
      var price = (yy.Price)
      console.log(price)
      var tag = (yy.Tag)
      console.log(tag)
      console.log(this.list)
      this.list.push({photoName: title, id: ind, img: photo, loc: location, price: price, tag: tag})
      ind++;
      
    
    })        
  }

  },
}
</script>

 <style lang="less" scoped>
  .photo-list {
            text-align: center;
            width: 1300px;
            padding-bottom: 90px;

                .grouping-name {
                    margin: 55px 0 32px 32px;
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
                        .photo-Name {
                            font-size: 50px;
                            font-weight: bold;
                            margin-bottom: 5px;
                        }
                        .read-more {
                            font-size: 20px;
                            width: 105px;
                            height: 33px;
                            border: 1px solid #fff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            &:hover {
                                background: #fff;
                                color: #000;
                                font-weight: bold;
                            }
                        }
                    }
                
            }
        }

button{
    text-align:center;
    margin: auto;
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