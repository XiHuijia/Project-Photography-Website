<template>
  <div class="headline">
    <div id = "firstline">
        <div class="pagetitle">
            <h2 class="title"> Photographic Society of South East Asia </h2>
        </div>
        <div v-if="user">
          <div class = "action">
              <img id = "touxiang" src = "@/assets/picture.png" v-on:click="menuToggle();">
          <div id = "touxiang_menu">
            <ul>
              <li><a href="/profile">My Profile</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">New Post</a></li>
              <li><a href='@/components/SignOut.vue'>Sign Out</a></li>
            </ul>
          </div>
          </div>
          </div>
    </div>

    <div class = menu>
      <div class = "nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About Us</router-link> |
        <router-link to="/latest">Latest Photograph</router-link> 
      </div>
      <div class="profile">
            <div v-if="user">
          </div>

          <div v-else>
            <router-link to="/signin">Sign in/Register</router-link>
          </div>
      </div>
    </div>
    
  </div>


</template>

<script>


import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
    name: 'HeadLine',

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
  }
}
</script>

<style scoped>
.headline{
            width: 100%;
        }
#firstline {
  height: 50px;
  align-items: center;
}
.pagetitle {
    font-family: Helvetica;
    width: 80%;
    font-weight: bold;
    font-size: 24px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    float: left;
    }
.menu{
  height: 50px;
  background-color: #f9beaf
}
.nav{
  font-family: Helvetica;
  margin-left: 15px;
  height: 50px;
  line-height:50px;
  font-size: 20px;
  float: left;
  
}
.nav a:hover{        
    border-bottom: 2px solid seagreen;
    color: seagreen;
}
.profile{
    font-family: Helvetica;
    margin-left: 10px;
    width: 300px;
    height: 50px;
    font-size: 20px;
    float: right;
    line-height:50px;
}
.profile a:hover{
  border-bottom: 2px solid grey;
  color: grey;
}
.action{
  float: right;
  margin-right: 20px;
}
#touxiang{
  height:40px;
  width: 40px;
  margin-right: 5px;
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
  padding: 10px 0;
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
</style>