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

        <button class="btn-share">
          <span class="btn-overlay"><svg t="1580465783605" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9773" width="20" height="20"><path d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z" p-id="9774" fill="currentColor"></path></svg>&nbsp;Share</span>
          <a href="https://twitter.com"><svg t="1580195676506" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2099" width="28" height="28"><path d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z" p-id="2100" fill="currentColor"></path></svg></a>
          <a href="https://facebook.com"><svg t="1580195734305" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2429" width="28" height="28"><path d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z" p-id="2430" fill="currentColor"></path></svg></a>
          <a href="https://github.com/"><svg t="1580195767061" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2759" width="28" height="28"><path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" p-id="2760" fill="currentColor"></path></svg></a>
          <a href="https://www.linkedin.com"><svg t="1580195779874" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3041" width="28" height="28"><path d="M208.603429 808.009143l132.022857 0 0-396.580571-132.022857 0 0 396.580571zM349.110857 289.133714q-0.585143-29.696-20.553143-49.152t-53.174857-19.456-53.979429 19.456-20.845714 49.152q0 29.110857 20.260571 48.859429t52.882286 19.748571l0.585143 0q33.718857 0 54.272-19.748571t20.553143-48.859429zM683.446857 808.009143l132.022857 0 0-227.401143q0-87.990857-41.691429-133.12t-110.299429-45.129143q-77.677714 0-119.442286 66.852571l1.170286 0 0-57.709714-132.022857 0q1.682286 37.741714 0 396.580571l132.022857 0 0-221.696q0-21.723429 4.022857-32.036571 8.557714-19.968 25.746286-34.011429t42.276571-13.970286q66.267429 0 66.267429 89.746286l0 211.968zM950.857143 237.714286l0 548.571429q0 68.022857-48.274286 116.297143t-116.297143 48.274286l-548.571429 0q-68.022857 0-116.297143-48.274286t-48.274286-116.297143l0-548.571429q0-68.022857 48.274286-116.297143t116.297143-48.274286l548.571429 0q68.022857 0 116.297143 48.274286t48.274286 116.297143z" p-id="3042" fill="currentColor"></path></svg></a>
        </button>

        <div class="content">Copyright@Photographic Society of South East Asia, 2022</div>
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
        &:hover {
          border-bottom: 4px solid rgb(252, 138, 193);
      }
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

  .btn-share {
      margin: 50px 0 0 350px;
      --btn-inner-color: #fceff3;
      --btn-overlay-color: #f05a98;
      --icon-color: #d22c71a8;
      position: relative;
      display: flex;
      font-size: 100%;
      font-family: Merienda;
      color: white;
      letter-spacing: 2px;
      background: var(--btn-inner-color);
      border: none;
      border-radius: 80px;
      outline: none;
      cursor: pointer;
      overflow: hidden;
      transform: rotate(0);
      transition: 0.2s ease-in-out;

      .btn-overlay {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: var(--btn-overlay-color);
        border-radius: inherit;
        transition: 0.6s linear;
      }

      a {
        padding: 14px;
        color: var(--icon-color);
        opacity: 0;
        transform: translateX(-100%);
        transition: 0.3s;
      }

      &:hover {
        transform: scale(1.1);

        .btn-overlay {
          transform: translateX(-100%);
          transition-delay: 0.25s;
        }

        a {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }

  .content{
    font: 100 12px Merienda;
    color: white;
    margin: 80px 220px 40px;
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