<template>
  <div class="index">
    <div class="top-search">
      <div>
        <div class="top-text">
          <h2 style="font-family: fantasy">
            Search
          </h2>
        </div>
        <div class="input-block">
          <form id="form" role="search" @submit.prevent="index">
            <input id="query" name="q" placeholder="Search here..." aria-label="Search through site content">
            <button class="searchbtn" @click="updatework()">
              <svg viewBox="0 0 1024 1024">
                <path class="path1" d="M848.471 928l-263.059-263.059c-48.941
                36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 
                0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 
                408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 
                218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="blog-list">
      <div class="blog-list-grouping" v-for="item in list" :key="item.id">
        <div class="tag">
          {{ item.tag }}
        </div>
        <div class="blog-list-main">
          <div class="blog-list-item" v-for="Info in item.child" :key="Info.id"
               :style="{background: 'url(' + Info.img + ')'}">
            <div class="city-name">{{ Info.Name }}</div>
            <!-- <div class="read-more" @click="jumpPage(Info.Name)">Read More</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getDoc, doc } from "@firebase/firestore";
//import {ref} from "vue";
import {useRouter} from "vue-router";
//import { db } from "../../firebase";
import firebaseApp from '../firebase.js';
import {getFirestore} from "firebase/firestore";
const db = getFirestore(firebaseApp);
const updatework = async () => {
  let work = document.querySelector("input[name=q]").value;
  work = work.charAt(0).toUpperCase() + work.slice(1);
  const docRef = doc(db, "cities/"+work);
  const res = await getDoc(docRef);
  if(res.exists()) {
    router.push({
    name: 'cityPage', params: {name : work}
  });
  } else {
    alert("There is no" + work)
  }
  
};
const router = useRouter();
const list = [
  {
    tag: 'Lake',
    id: 1,
    child: [
      {
        Name: 'lake1',
        id: 1 - 1,
        img: require('../assets/image/image3.jpeg')
      },
      {
        Name: 'lake2',
        id: 1 - 2,
        img: require('../assets/image/image4.jpeg')
      },
      {
        cityName: 'lake3',
        id: 1 - 3,
        img: require('../assets/image/image5.jpeg')
      }
    ]
  },
  {
    tag: 'Mountain',
    id: 2,
    child: [
      {
        Name: 'mount1',
        id: 2 - 1,
        img: require('../../assets/image/image1.jpeg')
      },
      {
        Name: 'mount2',
        id: 2 - 2,
        img: require('../../assets/image/image9.jpeg')
      }
    ]
  },
  {
    tag: 'Sea',
    id: 3,
    child: [
      {
         Name: 'sea1',
        id: 3 - 1,
        img: require('../../assets/image/image11.jpeg')
      },
      {
        Name: 'sea2',
        id: 3 - 2,
        img: require('../../assets/image/image12.jpeg')
      }
    ]
  }
]
// const wordKey = ref("1");
// const jumpPage = (name, index) => {
//   router.push({
//     name: 'workPage', params: {name : name}
//   });
//   wordKey.value = index;
// };
</script>