<template>
    <footer>
        <h2>
        <div>
            <div class="item">Grow with Us</div>
            <div class="item">Business with Us</div>
            <div class="item">Explore</div>
        </div>
        <div class="second">
            <div @click="jumpPage('About')" class="item">About Us</div>
            <div class="item">Owners</div>
            <div class="item">Museums</div>

        </div>
        <div class="second">
            <div class="item">Workshop</div>
            <div class="item">Sponsored Placements</div>
            <div class="item">Exhibitions</div>          
        </div>

        </h2>

        <div>        
        <div class="title">
            <h2>Photographic Society of South East Asia</h2>
        </div>
        <div class="logo-list">
            <img @click="jump3page('https://twitter.com')" src="../assets/image/01ab6619093f45388d66736ec22e5885.png" alt="">
            <img @click="jump3page('http://www.facebook.com')" src="../assets/image/23fd2a2be53141ed810f4d3dcdcd01fa.png" alt="">
            <img @click="jump3page('https://www.instagram.com')" src="../assets/image/81af6121f84c41a5b4391d7d37fce12a.png" alt="">
        </div>
        </div>

    </footer>
</template>


<script setup>


</script>

<style lang="less" scoped>

footer {
  position: relative;
  z-index: 999999;
  padding: 40px calc((100% - 980px) * 0.5);
  padding-bottom: 5px;
  background: #f9beaf;
  height: 600px;
  font-family: 'Noto Nastaliq Urdu', serif;

  letter-spacing: 0.2em;
  h2 {
  > div {
    display: flex;
    padding-bottom: 5px;
    &.second{
      > div.item {
        font-size: 15px !important;
        color: #fff !important;
      }
    }
    > div.item {
      flex-shrink: 0;
      margin-right: 100px;
      width: 287px;
      font-size: 20px;
      color: #fff !important;
      cursor: pointer;
      &:hover {
        color: #000 !important;
      }
    }
  }
  }

  .title {
    font-family: 'Kolker Brush', cursive;
  }

  h2 {
    font-size: 55px;
    letter-spacing: 0.2em;
    color: #fff;
  }
  .logo-list {
    margin-left: 40px;
    img {
      
      height: 30px;
      width: 30px;
      margin-right: 3px;
    };
    &:hover {
    color: #000 !important;
    cursor: pointer;
    }
  }
}
</style>