<template>
  <div class="home" v-cloak>
    <HeadLine/>
    <HomeContent/>
    <MyFooter/>
  </div>
  
  

</template>
  
<script>
  import HeadLine from '@/components/HeadLine.vue';
  import HomeContent from '@/components/HomeContent.vue';
  import MyFooter from '@/components/MyFooter.vue';
  //import SearchBar from '@/components/SearchBar.vue';

  export default {
    name: 'MyHome',
    components:{
      HeadLine,
      HomeContent,
      //SearchBar,
      MyFooter,
    }

  }
</script>
  
<style scoped>
.home {
  float: left;
  text-align: center;
  width: 100%;
}
[v-cloak]{
  display: none;
}
</style>
