<template>
  <div class="home" v-cloak>
    <HeadLine/>
    <HomeContent/>
    <MyFooter/>
    <CommentPage/>
  </div>
  
  

</template>
  
<script>
  import HeadLine from '@/components/HeadLine.vue';
  import HomeContent from '@/components/HomeContent.vue';
  import MyFooter from '@/components/MyFooter.vue';
  import CommentPage from '@/components/CommentPage.vue';

  export default {
    name: 'MyHome',
    components:{
      HeadLine,
      HomeContent,
      MyFooter,
      CommentPage,
      
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
