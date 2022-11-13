<template>
<!-- <input type="text" v-model="input" placeholder="Search for photographs" />
<div class="tag_search" v-for="tag in filteredList()" :key="tag">
    <p>{{tag}}</p>
</div>
<div class="item_error" v-if="input&&!filteredList().length">
    <p>No results found!</p>
</div> -->

    <nav>
    <h2>
        <ul class="nav-list">
        <li
            v-for="(item, index) in tagList"
            :key="index"
            :class="{ active: wordKey === item.level }"
            @click="jumpPage(item.name, item.level)"
        >
            <span>{{ item.label }}</span>
            <ul class="son-list">
            <li
                v-for="(menu, key) in item.child"
                :key="key"
                :class="{ active: wordKey === menu.level }"
                @click.stop="jumpPage(menu.name, menu.level)"
            >
                {{ menu.label }}
            </li>
            </ul>
        </li>
        </ul>
    </h2>
    </nav>
</template>

<script>
// //import firebaseApp from '../firebase.js';
// //import {getFirestore} from "firebase/firestore";
// import {ref} from "vue";
// //import {db} from '../firebase.js';
// //import {getDoc, doc} from 'firebase/firestore';
// //const db = getFirestore(firebaseApp);
// let input = ref("");
// //const tags = await getDoc(doc(db,"Tag"));
// const tags = ["Waves", "Sea", "Myth"];

// function filteredList(){
//     return tags.filter((tag) =>
//     tag.toLowerCase().includes(input.value.toLowerCase()))
// }




import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  data() {
    return {profileMenu: null}
  },
  methods: {
    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile) {
        this.profileMenu = !this.profileMenu;
      }
    }
  },
  setup() {
    const router = useRouter();
    const menuList = [
  {
    name: "index",
    label: "Destination",
    level: "1",
    child: [
      // {
      //   name: "indivAttractionPager",
      //   label: "Indiv Attraction Pager",
      //   level: "1-1",
      // },
      // {
      //   name: "attractionListPage",
      //   label: "attractionListPage",
      //   level: "1-2",
      // },
    ],
  },
  {
    name: "blog-main",
    label: "Blog",
    level: "2",
    // child: [
    //   {
    //     name: "blogListPage",
    //     label: "Blog List Page",
    //     level: "2-1",
    //   },
    //   {
    //     name: "indivAttractionPager",
    //     label: "Search Results",
    //     level: "2-2",
    //   },
    //   {
    //     name: "indivBlogPage",
    //     label: "Indiv Blog Page",
    //     level: "2-3",
    //   },
    // ],
  },
  {
    name: "layout",
    label: "Others",
    level: "3",
    child: [
      {
        name: "About",
        label: "About Us",
        level: "3-1",
      },
      {
        name: "Review",
        label: "Write A Review",
        level: "3-2",
      },
      // {
      //   name: "indivBlogPage",
      //   label: "Indiv Route Page",
      //   level: "3-3",
      // },
    ],
  },
];
              const wordKey = ref("1");
  
  const jumpPage = (name, index) => {
    router.push({
      name,
    });
    wordKey.value = index;
  };
    const jump3page = (url) => {
      window.open(url, '_blank')
  };
    return {router,menuList, wordKey, jumpPage, jump3page}
  }
}
</script>
