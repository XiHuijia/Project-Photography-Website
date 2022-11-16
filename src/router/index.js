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
import PurchasePic from '@/view/PurchasePic.vue'
import PurchasePicDynamic from '@/view/PurchasePicDynamic.vue'
import FollowingPage from '@/view/FollowingPage.vue'
import FollowerPage from '@/view/FollowerPage.vue'
import OtherUserProfile from '@/view/OtherUserProfile.vue'
import ViewHistory from '@/view/ViewHistory.vue'
import IndivPicDynamic from '@/view/IndivPicDynamic.vue'

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
    path: '/indivpic/:id/:photo/:title/:author/:email/:tag/:price/:location',
    name: 'IndivPic',
    props: true,
    component: IndivPic
  }
  ,
  {
    path: '/indivpicdynamic/:id/:photo/:title/:author/:email/:tag/:price/:location',
    name: 'IndivPicDynamic',
    props: true,
    component: IndivPicDynamic
  }
  ,
  {
    path:'/purchase/:id/:photo/:title/:price',
    name: 'PurchasePic',
    component: PurchasePic
  }
  ,
  {
    path:'/purchasedynamic/:id/:photo/:title/:price',
    name: 'PurchasePicDynamic',
    component: PurchasePicDynamic
  }
  ,
  {
    path: "/following",
    name: "FollowingPage",
    component: FollowingPage,
  }
  ,
  {
    path: "/follower",
    name: "FollowerPage",
    component: FollowerPage,
  }
  ,
  {
    path: "/otheruser/:email",
    name: "OtherUserProfile",
    component: OtherUserProfile
  }
  ,
  {
    path: "/viewhistory",
    name: "ViewHistory",
    component: ViewHistory,
  }
  ,
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router