<template>
  <router-view/>  

</template>

<script>
export default {
  name: 'App',

  // mounted() {
  //   this.$router.afterEach((to, from, next) => {
  //     to
  //     from
  //     next
  //     window.scrollTo(0,0)
  //   })
  // }
}

// import { onBeforeMount } from "vue";
// import { useStore } from "vuex";
// export default {
//   name: "App",
//   components: {
//   },
//   setup() {
//     const store = useStore()
//     onBeforeMount(() => {
//       store.dispatch("fetchUser")
//     })
//   },
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import url('https://fonts.googleapis.com/css2?family=Kolker+Brush&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap');

</style>
