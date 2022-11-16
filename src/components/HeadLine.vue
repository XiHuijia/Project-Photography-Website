<template>

  <div class="headline">
      <div class="pagetitle">
        Photographic Society of South East Asia
      </div>


      <div v-if="user">
          <div class = "action">
              <img id = "touxiang" src = "../assets/profilephoto.png" v-on:click="menuToggle();">
            <div id = "touxiang_menu">
              <ul>
                <li><a href="/userprofile">My Profile</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/upload">New Post</a></li>
                <li><a href="/viewhistory">View History</a></li>
                <li><SignOut/></li>
              </ul>
            </div>
          </div>
        </div>

      <div class="profile">
          <div v-if="user"></div>
          <div v-else>
            <button @click="jumpPage('SignIn')" class="btn btn-primary btn-snake-border">
              <div class="btn-borders">
                <div class="border-top"></div>
                <div class="border-right"></div>
                <div class="border-bottom"></div>
                <div class="border-left"></div>
              </div>
              <span class="btn-text">SingIn/Register</span>
            </button>
          </div>
      </div>

      <nav>
          <ul>
            <li>
              <a @click="jumpPage('HomePage')">Home</a>
            </li>
            <li>
              <a @click="jumpPage('AboutUs')">About Us</a>
            </li>
            <li>
              <a @click="jumpPage('LatestPhotograph')">Latest Photograph</a>
            </li>
          </ul>
      </nav>
  </div> 
</template>

<script>
import SignOut from '@/components/SignOut.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
export default {
    name: 'HeadLine',
    components: {
      SignOut,
    },
    data() {
        return {
            user:false,
        }
    },
    mounted(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user) {
          this.user = user;
        }
    })
  },
  methods: {
    menuToggle() {
        const toggleMenu = document.querySelector("#touxiang_menu");
        toggleMenu.classList.toggle("active");
      }
  },
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
.headline{
  margin-left: auto;
  margin-right: auto;
  margin-top: -70px;
  height: 180px;
  background: url(https://t4.ftcdn.net/jpg/04/97/86/15/360_F_497861573_EX9cjKXjVLBhbHrawjVK8M3BthLDS5lE.jpg);
  background-size:cover;
  width: 100%;
  }

.pagetitle {
    height: 100px;
    margin-left: 130px;
    margin-top:15px;
    font-family: 'Kolker Brush', cursive;
    font-size: 110px;
    display: flex;
    align-items: center;
    float: left;
    }

nav {
  font-family: Merienda;
  max-width: 1000px;
  margin-left:-150px;
  mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 25%, #ffffff 75%, rgba(255, 255, 255, 0) 100%);
}

nav ul {
  text-align: center;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
}

nav ul li {
  display: inline-block;
  cursor: pointer;
}

nav ul li a {
  padding: 18px;
  text-transform:uppercase;
  color: rgba(73, 66, 66, 0.87);
  font-size: 18px;
  text-decoration: none;
  display: block;
}

nav ul li a:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);
  color: rgba(230, 67, 143, 0.7);
}

.profile{
    font-family: Merienda;
    width: 300px;
    height: 50px;
    font-size: 20px;
    float: right;
    // line-height:50px;
}
.profile a:hover{
  border-bottom: 2px solid #fff;;
  color: #fff;
}
.action{
  float: right;
  margin-right: 25px;
  line-height:86px;
  font-family: Merienda;
}
#touxiang{
  height:40px;
  width: 40px;
  margin-right: 15px;
  cursor: pointer;
}
.action #touxiang_menu{
  position: absolute;
  padding-right: 40px;
  margin-right: 20px;
  right: -10px;
  background: #F2F4F4;
  border-radius: 15px;
  transition: 0.5s;
  visibility: hidden; 
  opacity: 0;
}
.action #touxiang_menu.active{
  visibility: visible;
  opacity: 1;
}
.action #touxiang_menu::before{
  content: '';
  position: absolute;
  top: 0;
  right: 10px;
  height: 10px;
  width: 20px;
  background: #F2F4F4;
  transform: rotate(45deg);
}
.action #touxiang_menu ul li{
  list-style: none;
  padding: 1px 0;
  border-top: 1px solid rgba(0,0,0,0.05);
  direction: flex;
  align-items: center;
  justify-content: center;
}
.action #touxiang_menu ul li a{
  display: inline-block;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: 0.5s;
}
.action #touxiang_menu ul li a:hover{
  color: #ff5d94;
}

.btn {
  position: relative;
  padding: 1rem 2rem;
  font-family: Merienda;
  font-size: 1rem;
  color: black;
  text-decoration: none;
  background-color: white;
  border: transparent;
  outline: transparent;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;

  &-primary {
    color: white;
    background-color: #f56e9b;
  }

  &-snake-border {
    .btn-borders {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .border-top {
        position: absolute;
        top: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, transparent, white);
        animation: moveHorizontally 2s linear infinite;
      }

      .border-right {
        position: absolute;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(to bottom, transparent, white);
        animation: moveVertically 2s 1s linear infinite;
      }

      .border-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(to left, transparent, white);
        animation: moveHorizontally 2s linear reverse infinite;
      }

      .border-left {
        position: absolute;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(to top, transparent, white);
        animation: moveVertically 2s 1s linear reverse infinite;
      }
    }
  }
}

@keyframes moveHorizontally {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes moveVertically {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(100%);
  }
}

</style>