<template>
    <HeadLine/>
    <header>

        <div class="container">

            <div class="profile">

                <div class="profile-image">

                    <img src="@/assets/1st_profile.png" alt="">

                </div>

                <div class="profile-user-settings">

                    <h1 class="profile-user-name">{{user.displayName}}'s Profile</h1>

                    <br>

                    <button class="btn btn-gradient" @click="jumpPage('EditProfile')">Edit Profile</button>

                </div>

                <div class="profile-stats">

                    <ul>
                        <li><span class="profile-stat-count" @click="jumpPage('MyPortfolio')">164</span> posts</li>
                        <li><span class="profile-stat-count" @click="jumpPage('FollowerPage')">188</span> followers</li>
                        <li><span class="profile-stat-count" @click="jumpPage('FollowingPage')">206</span> following</li>
                    </ul>

                </div>

                <div class="profile-bio">

                    <p>I am a full time photographer who has been in the business for many years now. Before ever shooting professionally I have always found light and people to be very interesting subjects that inspires me to no end. I am often fascinated with exploring the creative possibilities with my subjects and relish in the discovery of undiscovered possibility.  📷✈️🏕️</p>

                </div>

            </div>
            <!-- End of profile section -->

        </div>
        <!-- End of container -->

        </header>

        <div class="container2">
            <div class="card">
                <img src="../assets/image19.jpg" alt="The Peak" class="card-img-top">
                <div class="card-body" @click="goDetail(1, 'The Peak', 'image19.jpg')">
                    <h5 class="card-title">The Peak</h5>
                    <p class="card-text">The adventure starts.</p>
                    <a href="#" class="cardbtn">More</a>
                </div>
            </div>
            <div class="card">
                <img src="../assets/image20.jpg" alt="The Mountain" class="card-img-top">
                    <div class="card-body" @click="goDetail(2, 'The Mountain', 'image20.jpg')">
                        <h5 class="card-title">The Mountain</h5>
                        <p class="card-text">California Streaming</p>
                        <a href="#" class="cardbtn">More</a>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image21.jpg" alt="Pink" class="card-img-top">
                    <div class="card-body" @click="goDetail(3, 'Pink', 'image21.jpg')">
                        <h5 class="card-title">The Pink Forest</h5>
                        <p class="card-text">Aesthetic mountain wallpaper background image</p>
                        <a href="#" class="cardbtn">More</a>
                    </div>
                </div>
        </div>
    <MyFooter/>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue';
import MyFooter from '@/components/MyFooter.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
// import firebaseApp from '../firebase.js';
// import { getFirestore } from "firebase/firestore"
// import { collection, getDocs} from "firebase/firestore";
// const db = getFirestore(firebaseApp);

export default {
    components:{
        HeadLine,
        MyFooter
    },
    data() {
        return {
            user:false,
            list: [],
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
    },

    methods: {
        goDetail (id, name, image) {
            console.log("go to detail page")
            console.log(id, name, image)
            this.$router.push({name: 'IndivPic', params: { id:id, photo: image, title:name }})
        }
    },

    mounted(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user) {
          this.user = user;
          //display(user)
        }
    });

//     async function display(user){
//     let z = await getDocs(collection(db, String(user)))    
//     let ind = 1

//     z.forEach((docs) => {
//       let yy = docs.data()

//       var photo = (yy.pic)
//       var title = (yy.tit)
//       var location = (yy.loc)
//       var price = (yy.pri)
//       var tag = (yy.t)
      
//       this.list.push({photoName: title, id: ind, img: photo, loc: location, price: price, tag: tag})
//       ind++;
//     })        
//   }

  },
}

</script>

<style lang="less" scoped>

.container {
    margin: 0 auto;
    max-width: 93.5rem;
    background-image: url(https://img.freepik.com/free-vector/hand-drawn-minimal-background_23-2148999828.jpg?w=2000);
    background-size: cover;
    font-family: Merienda;
    color: rgb(20, 19, 20);
    text-align: center;
}

.profile {
    padding: 5rem 0 0 5rem;
    display: flex;
    flex-wrap: wrap;
}
.profile-image {
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:200px;
    margin-right: 10px;
}

.profile-image img {
    border-radius: 50%;
}

.profile-user-settings,
.profile-stats,
.profile-bio {
    float: left;
    width: calc(66.666% - 2rem);
}

.profile-user-settings {
    margin-top: 1.1rem;
}

.profile-user-name {
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 300;
}

.profile-stats {
    margin-top: 2.3rem;
}

.profile-stats li {
    display: inline-block;
    font-size: 1.6rem;
    line-height: 1.5;
    margin-right: 4rem;
    cursor: pointer;
}

.profile-stats li:last-of-type {
    margin-right: 0;
}

.profile-bio {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 2.3rem;
}

.profile-real-name,
.profile-stat-count{
    font-weight: 600;
}

    .profile-image img {
        width: 15rem;
    }

    .profile-user-name {
        font-size: 2.2rem;
    }

    .profile-bio {
        font-size: 1.4rem;
        margin-top: 1.5rem;
    }

    .profile-edit-btn,
    .profile-bio,
    .profile-stats {
        flex-basis: 100%;
        float: none;
        width: auto;
        order: 1;
        margin-top: 1.5rem;
    }

    .profile-stats ul {
        display: flex;
        text-align: center;
        padding: 1.2rem 0;
        border-top: 0.1rem solid #dadada;
        border-bottom: 0.1rem solid #dadada;
    }

    .profile-stats li {
        font-size: 1.4rem;
        flex: 1;
        margin: 0;
    }

    .profile-stat-count {
        display: block;
    }
    .profile {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: repeat(3, auto);
        grid-column-gap: 3rem;
        align-items: center;
    }

    .profile-image {
        grid-row: 1 / -1;
    }

    .profile-image,
    .profile-user-settings,
    .profile-stats,
    .profile-bio{
        width: auto;
        margin: 0;
    }
        .profile {
            grid-template-columns: auto 1fr;
            grid-row-gap: 1.5rem;
        }

        .profile-image {
            grid-row: 1 / 2;
        }

        .profile-user-settings {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1rem;
        }

        .profile-edit-btn,
        .profile-stats,
        .profile-bio {
            grid-column: 1 / -1;
        }

        .profile-user-settings,
        .profile-edit-btn,
        .profile-settings-btn,
        .profile-bio,
        .profile-stats {
            margin: 0;
        }

.btn {
  font-family: Merienda;
  position: relative;
  padding: 1rem 3rem;
  margin: 10px 30px 50px 30px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: black;
  text-decoration: none;
  background-color: white;
  border: transparent;
  outline: transparent;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  animation: glow 8s linear infinite;

  &-gradient {
    color: white;
    background: linear-gradient(90deg, #f5b4a8, #f1549b, #f5b4a8);
    background-size: 300%;
    border-radius: 2em;

    &::before {
      position: absolute;
      content: "";
      top: -5px;
      left: -5px;
      bottom: -5px;
      right: -5px;
      z-index: -1;
      background: inherit;
      background-size: inherit;
      border-radius: 4em;
      opacity: 0;
      transition: 0.5s;
    }

    &:hover::before {
      opacity: 1;
      filter: blur(20px);
      animation: glow 8s linear infinite;
    }
  }
}

@keyframes glow {
  to {
    background-position: 300%;
  }
}

.container2 {
  width: 100px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0 0 80px 150px;
  
  .card {
    margin: 1em;

    .card-img-top {
      position: relative;
      z-index: 2;
      width: 310px;
      height: 222px;
      transform: translateY(52%);
      transition: 0.5s;
      border-radius: 5px;
    }

    .card-body {
      z-index: 1;
      box-sizing: border-box;
      padding: 1.25em;
      height: 220px;
      background: white;
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.056),
        0 6.7px 5.3px rgba(0, 0, 0, 0.081), 0 12.5px 10px rgba(0, 0, 0, 0.1),
        0 22.3px 17.9px rgba(0, 0, 0, 0.119),
        0 41.8px 33.4px rgba(0, 0, 0, 0.144), 0 100px 80px rgba(0, 0, 0, 0.2);
      transform: translateY(-50%);
      transition: 0.5s;
      border-radius: 5px;

      .card-title {
        margin: 0 0 0.3em 0;
        font-size: 1.25em;
        font-weight: bold;
        line-height: 1.2;
        font-family: Merienda;
      }

      .card-text {
        margin: 0 0 1em 0;
        font-family: 'Noto Nastaliq Urdu', serif;
      }

      .cardbtn {
        padding: 0.375em 0.75em;
        color: rgb(223, 63, 137);
        text-decoration: none;
        line-height: 1.5;
        border: 1px solid rgb(223, 63, 137);
        border-radius: 0.25em;
        transition: 0.5s;

        &:hover {
          color: white;
          background: rgb(223, 63, 137);
        }
      }
    }

    &:hover {
      .card-img-top {
        transform: translateY(2%);
      }

      .card-body {
        transform: translateY(0);
      }
    }
  }
}

</style>