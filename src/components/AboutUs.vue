<template>
    <HeadLine/>
        <div class="about_us">
            
            <div class = "filling">About Us</div>
            <p>This is the official website for Photographic Society of South East Asia. 
                This website aims to showcase the works of all our members and provide a channel to buy and sell photographic works.
                As a user, feel free to create your own profile to display your works and interests. You can also use this website as a channel to make profits from your works as well as purchasing any work you like.
            </p>

            <div> 
            <img src="@/assets/aboutus.jpg" /> 
            <br>
            </div>
            
        </div>
    <MyFooter/>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue';
import MyFooter from './MyFooter.vue';
export default{
    name:'AboutUs',
    components: {
        HeadLine,
        MyFooter
    }
}
</script>

<style scoped>

p{
    text-align: justify;
    font-size: 20px;
}

.about_us {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    z-index: 999999;
    padding: 56px calc((100% - 980px) * 0.5);
    padding-bottom: 0;
    background: #f9beaf57;
    height: 1000epx;
    letter-spacing: 0.2em;
    font-family: 'Noto Nastaliq Urdu', serif;
}
    .filling {
      --fill-color: #f45ea1;
      position: relative;
      display: block;
      padding: 4px 0;
      font: 10 3rem Merienda;
      text-decoration: none;
      text-transform: uppercase;
      -webkit-text-stroke: 2px var(--fill-color);
      background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
      color: transparent;
      background-clip: text;
      transition: 0.5s linear;
    }

    .filling:hover {
        background-size:100%;
    }
      
</style>