<template>

  <div class="headline">
    <div id = "firstline">
        <div class="pagetitle">
            <h2 class="title"> Photographic Society of South East Asia </h2>
        </div>
        
    </div>

    <div class = menu>
      <div class = "nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About Us</router-link> |
        <router-link to="/latest">Latest Photograph</router-link> 
      </div>

      <div v-if="user">
          <div class = "action">
              <img id = "touxiang" src = "../assets/profilephoto.png" v-on:click="menuToggle();">
            <div id = "touxiang_menu">
              <ul>
                <li><a href="/profile">My Profile</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/upload">New Post</a></li>
                <li><SignOut/></li>
              </ul>
            </div>
          </div>
        </div>

      <div class="profile">
            <div v-if="user">
          </div>

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
    </div>
    
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
  margin-top: -50px;
  height: 180px;
  background: url(../assets/background2.png);
  background-size:cover;
  width: 100%;
  }
#firstline {
  height: 100px;
  align-items: center;
}
.pagetitle {
    height: 100px;
    margin-left: 150px;
    font-family: 'Kolker Brush', cursive;
    font-size: 65px;
    display: flex;
    align-items: center;
    float: left;
    }
.menu{
  height: 80px;
  
  background-size:cover;
  align-items: center;
}
.nav{
  font-family: Merienda;
  margin-left: 30px;
  height: 50px;
  line-height:64px;
  font-size: 22px;
  float: left;
  color: #fff;
  
}
.nav a:hover{        
    border-bottom: 2px solid #ff5d94;
    color: #ff5d94;
}
.profile{
    font-family: Merienda;
    margin-left: 10px;
    width: 300px;
    height: 50px;
    font-size: 20px;
    float: right;
    line-height:50px;
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