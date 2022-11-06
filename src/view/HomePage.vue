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

  export default {
    name: 'MyHome',
    components:{
      HeadLine,
      HomeContent,
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
