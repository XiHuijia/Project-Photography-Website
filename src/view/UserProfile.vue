<template>
    <HeadLine/>
    <div class="container">
        <div id="username">{{this.user.displayName}}</div>
        <div id="following">{{this.user.following}}</div>
        <button class="jumppage" @click="this.$router.push(MyPortfolio)">My Portfolio</button>
        <button class="jumppage" @click="this.$router.push(FollowingPage)">Following</button>
    </div>
    <MyFooter/>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
    components:{
        HeadLine,
        MyFooter
    }
}
</script>
