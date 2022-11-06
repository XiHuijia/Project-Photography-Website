import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/view/RegisterLogIn.vue'
import HomePage from '@/view/HomePage.vue'
import AboutUs from '@/components/AboutUs.vue'
import LatestPhotograph from '@/view/LatestPhotograph.vue'
import EditProfile from '@/components/EditProfile.vue'
<<<<<<< HEAD
import UploadPicNew from '@/view/UploadPicNew.vue'
=======
import MyPortfolio from '@/view/MyPortfolio.vue'
//import UploadPicNew from '@/view/UploadPicNew.vue'
>>>>>>> 07d0f9b491a0f3ed3f9740c2c9af1614f4b68186



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
<<<<<<< HEAD
  ,
  {
    path:'/upload',
    name: 'UploadPicNew',
    component: UploadPicNew
=======
  // ,
  // {
  //   path:'/upload',
  //   name: 'UploadPicNew',
  //   component: UploadPicNew
  // }
  ,
  {
    path: '/portfolio',
    name: 'MyPortfolio',
    component: MyPortfolio
>>>>>>> 07d0f9b491a0f3ed3f9740c2c9af1614f4b68186
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router