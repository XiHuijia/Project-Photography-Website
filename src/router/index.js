import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/view/RegisterLogIn.vue'
import HomePage from '@/view/HomePage.vue'
import AboutUs from '@/components/AboutUs.vue'
import LatestPhotograph from '@/view/LatestPhotograph.vue'
import EditProfile from '@/components/EditProfile.vue'
import UserProfile from '@/view/UserProfile.vue'
import MyPortfolio from '@/view/MyPortfolio.vue'
import UploadPicNew from '@/view/UploadPicNew.vue'
import IndivPic from '@/view/IndivPicNew.vue'



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
    path:'/editprofile',
    name: 'EditProfile',
    component: EditProfile
  }
   ,
  {
    path:'/userprofile',
    name: 'UserProfile',
    component: UserProfile
  }
   ,
  {
     path:'/upload',
     name: 'UploadPicNew',
     component: UploadPicNew
  }
  ,
  {
    path: '/portfolio',
    name: 'MyPortfolio',
    component: MyPortfolio
  }
  ,
  {
    path: '/indivpic/:id/:title/:photo',
    name: 'IndivPic',
    component: IndivPic
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router