<template>
    <footer>        
        <div>
            <div class="item">Grow with Us</div>
            <div class="item">Business with Us</div>
            <div class="item">Explore</div>
        </div>
        <div class="second">
            <div @click="jumpPage('AboutUs')" class="item">About Us</div>
            <div class="item">Owners</div>
            <div class="item">Museums</div>

        </div>
        <div class="second">
            <div class="item">Workshop</div>
            <div class="item">Sponsored Placements</div>
            <div class="item">Exhibitions</div>          
        </div>
        <div class="title">Photographic Society of South East Asia</div>
        <div class="content">Copyright@Photographic Society of South East Asia, 2022</div>
        <div class="logo-list">
            <a href="https://twitter.com"><img src="../assets/image/01ab6619093f45388d66736ec22e5885.png" alt="Twitter" /></a>
            <a href="http://www.facebook.com"><img src="../assets/image/23fd2a2be53141ed810f4d3dcdcd01fa.png" alt="Facebook" /></a>
            <a href="https://www.instagram.com"><img src="../assets/image/81af6121f84c41a5b4391d7d37fce12a.png" alt="Instagram" /></a>
        </div>
    </footer>
</template>


<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const jumpPage = (name) => {
      router.push({
        name,
      });
    };
      return {router,jumpPage}
    }
}

</script>

<style lang="less" scoped>

footer {
  position: relative;
  z-index: 999999;
  padding: 40px calc((100% - 980px) * 0.5);
  padding-bottom: 5px;
  background: #f9beaf;
  height: 800px;
  font-family: 'Noto Nastaliq Urdu', serif;

  letter-spacing: 0.2em;
  
  > div {
    display: flex;
    padding-bottom: 5px;
    &.second{
      > div.item {
        font-family: 'Noto Nastaliq Urdu', serif;
        font-size: 15px !important;
        font-weight: 1;
        color: #fff !important;
      }
    }
    > div.item {
      flex-shrink: 0;
      margin-right: 100px;
      width: 287px;
      cursor: pointer;
      --fill-color: #fff;
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
      &:hover {
        background-size:100%;
      }
    }
  }
  
  .logo-list {
    margin: 40px 0 40px 430px;
    align-content: center;
    img {
      height: 40px;
      width: 40px;
      margin-right: 5px;
    };
    &:hover {
    color: #000 !important;
    cursor: pointer;
    }
  }

  .content{
    font: 100 12px Merienda;
    color: white;
    margin: 40px 220px 40px;
  }
  .title {
    margin-top: 60px;
    font-family: 'Kolker Brush', cursive;
    color: #f8cce7;
    font-size: 5rem;
    text-transform: uppercase;
    animation: shining 0.1s alternate infinite;
  }

  @keyframes shining {
    from {
      text-shadow: 0 0 6px rgba(182, 211, 207, 0.9),
        0 0 30px rgba(206, 182, 211, 0.3), 0 0 12px rgba(202, 15, 223, 0.5),
        0 0 21px rgba(223, 15, 123, 0.9), 0 0 34px rgba(223, 15, 116, 0.8),
        0 0 54px rgba(223, 98, 15, 0.9);
    }
    to {
      text-shadow: 0 0 6px rgba(182, 211, 207, 1),
        0 0 30px rgba(211, 192, 182, 0.4), 0 0 12px rgba(223, 15, 60, 0.6),
        0 0 22px rgba(223, 123, 15, 0.8), 0 0 38px rgba(223, 15, 126, 0.9),
        0 0 60px rgb(223, 60, 15);
    }
  }
}
</style>