import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/view/RegisterLogIn.vue'
import HomePage from '@/view/HomePage.vue'
import AboutUs from '@/components/AboutUs.vue'
import LatestPhotograph from '@/view/LatestPhotograph.vue'
import EditProfile from '@/components/EditProfile.vue'
import MyPortfolio from '@/view/MyPortfolio.vue'
//import UploadPic from '@/view/UploadPic.vue'



const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },

  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  }
  ,
  {
    path: '/latest',
    name: 'LatestPhotograph',
    component: LatestPhotograph
  }
  ,
  {
    path:'/profile',
    name: 'EditProfile',
    component: EditProfile
  }
  // ,
  // {
  //   path:'/upload',
  //   name: 'UploadPic',
  //   component: UploadPic
  // }
  ,
  {
    path: '/portfolio',
    name: 'MyPortfolio',
    component: MyPortfolio
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router