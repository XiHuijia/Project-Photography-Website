<template>
    <div class="index">
        <div class="top-search">
            <div>
                <div class="top-text"></div>

                <div class="input-block">
                    <input type="text" placeholder="Search for photographs" />
                    <!-- <input type="text" v-model="input" placeholder="Search for photographs" />
                    <div class="tag_search" v-for="tag in filteredList()" :key="tag">
                        <p>{{tag}}</p>
                    </div> -->
                    <div class="item_error" v-if="input&&!filteredList().length">
                        <p>No results found!</p>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary btn-ghost btn-shine"> Search </button>
                </div>

            </div>
        </div>

        <div class="container" >
            <div class="card">
                <img src="../assets/image11.jpg" alt="Waves" class="card-img-top">
                <div class="card-body" @click="goDetail(1, 'Waves', 'image11.jpg', 'Yang Fan', 'yangfan0014@gmail.com', 'nature',  '4', 'Singapore')" >
                    <h5 class="card-title">Waves</h5>
                    <p class="card-text">The ocean is never still.</p>
                    <a class="cardbtn">More</a>
                </div>
            </div>
            <div class="card">
                <img src="../assets/image15.jpeg" alt="The Sea" class="card-img-top">
                    <div class="card-body" @click="goDetail(2, 'The Town', 'image15.jpeg', 'He Ziyu', 'heziyu68@gmail.com', 'nature', '4', 'Singapore')">
                        <h5 class="card-title">The Town</h5>
                        <p class="card-text">The whole island is remarkable for its beautiful scenery and its fertility.</p>
                        <a class="cardbtn">More</a>
                    </div>
                </div>
                <div class="card">
                    <img src="../assets/image14.jpeg" alt="The Myth" class="card-img-top">
                    <div class="card-body" @click="goDetail(3, 'The Myth', 'image14.jpeg', 'Xi Huijia', 'hjwuxi@gmail.com', 'history',  '5', 'Singapore')">
                        <h5 class="card-title">The Myth</h5>
                        <p class="card-text">A lasting impact on our perceived memory of a place.</p>
                        <a class="cardbtn">More</a>
                    </div>
                </div>
        </div>
        
        <div class="bot-list">
            <div class="featured">
            Since its inception in 1969, 
            <br>
            Photographic Society of South East Asia has held 
            <br>
            an annual photography competition for the benefit of the local photographic community. 
            <br>
            Initially known as the International Photographic Salon, 
            <br>
            it transitioned to its current form, Montage in 1999. 
            <br>
            Since then, Montage has gone from strength to strength,
            <br>
            inspiring more aspiring and passionate photographers every year.
            </div>
        </div>
    </div>

    
</template>


<script scoped>
// import {ref} from "vue";
// // import {db} from '../firebase.js';
// // import {getDoc, doc} from 'firebase/firestore';
// let input = ref("");

// // const tags = await getDoc(doc(db, "Tag"));
// const tags = ["waves", "sea", "myth"];

// function filteredList(){
//     return tags.filter((tag) =>
//     tag.toLowerCase().includes(input.value.toLowerCase()))
// }

export default {
    methods: {
        goDetail (id, name, image, author, email, tag, price, location) {
            console.log("go to detail page")
            console.log(id, name, image)
            this.$router.push({name: 'IndivPic', params: { id:id, photo: image, title:name,
            author: author, email: email, tag: tag, location: location, price: price }})
        }
    },
}

</script>

<style lang="less" scoped>
.index {
    .top-search{
        text-align: center;
        padding-top: 170px;
        height: 450px;
        width: 100%;
        background: url(../assets/edit_profile_bg2.jpg);
        background-size: cover;
        display: flex;
        flex-direction: row;
        justify-content: center;
        .top-text {
            font-size: 30px;
            color: #fff;
            text-align: center;
            font-weight: 400;
            padding-bottom: 20px;
        }
        .input-block {
            width: 400px;
            height: 60px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 5px;
            border: 1px solid #e55a89;
            display: flex;
            align-items: center;
            padding-right: 50px;
            padding-left: 10px;
        }
        input {
            font-family: Merienda;
            box-shadow:none;
            outline: none;
            resize: none;
            border: none;
            -webkit-tap-highlight-color:rgba(0,0,0,0);
            background: none;
            font-size: 20px;
            display: block;
            flex: 1
        }
    }
                  
    .bot-list {
        height: 380px;
        background: #f2f2f2;
        display: center;
        align-items: center;
        padding-left: 200px;
        > div {
            display: flex;
            width: 980px;
            margin: 0 auto;
            display: flex;
            
            >div {
                padding: 10px 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;               
            }
        }
    }
    .featured {
                font-family: 'Noto Nastaliq Urdu', serif;               
                font-size: 18px;
            }
}

.btn {
  margin-top: 30px;
  border-radius: 15px;
  font-family: Merienda;
  position: relative;
  padding: 1rem 3rem;
  font-size: 18px;
  line-height: 1.5;
  color: #e55a89;
  text-decoration: none;
  text-transform: uppercase;
  background-color: hsl(332, 100%, 60%);
  border: 1px solid hsl(332, 100%, 60%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &:hover {
    background: hsl(332, 100%, 60%);
  }

  &-primary {
    --hue: 187;
  }

  &-ghost {
    color: hsl(332, 100%, 60%);
    background-color: #f9e9eebe;
    border-color: hsl(332, 100%, 60%);

    &:hover {
      color: #e55a89;
    }
  }

  &-shine {
    color: #e55a89;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        hsla(332, 100%, 41%, 0.5),
        transparent
      );
      transform: translateX(-100%);
      transition: 0.6s;
    }

    &:hover {
      background: transparent;
      box-shadow: 0 0 20px 10px hsla(332, 100%, 41%, 0.5);
    }

    &:hover::before {
      transform: translateX(100%);
    }
  }
}

.container {
  width: 1000px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0 0 80px 150px;
  
  .card {
    margin: 1em;

    .card-img-top {
      position: relative;
      z-index: 2;
      width: 320px;
      height: 222px;
      transform: translateY(52%);
      transition: 0.5s;
      border-radius: 5px;
    }

    .card-body {
      z-index: 1;
      box-sizing: border-box;
      padding: 1.25em;
      height: 222px;
      width: 310px;
      background: white;
      box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.056),
        0 6.7px 5.3px rgba(0, 0, 0, 0.081), 0 12.5px 10px rgba(0, 0, 0, 0.1),
        0 22.3px 17.9px rgba(0, 0, 0, 0.119),
        0 41.8px 33.4px rgba(0, 0, 0, 0.144), 0 100px 80px rgba(0, 0, 0, 0.2);
      transform: translateY(-50%);
      transition: 0.5s;
      border-radius: 5px;

      .card-title {
        margin: 0 0 0.75em 0;
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
        cursor: pointer;

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