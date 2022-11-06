<template>
    <div class="index">
        <div class="top-search">
            <div>
                <div class="top-text"></div>

                <div class="input-block">
                    <input type="text" v-model="input" placeholder="Search for photographs" />
                    <div class="tag_search" v-for="tag in filteredList()" :key="tag">
                        <p>{{tag}}</p>
                    </div>
                    <div class="item_error" v-if="input&&!filteredList().length">
                        <p>No results found!</p>
                    </div>
                </div>

            </div>
        </div>

        <div class="photo-list">
            <div class="photo-list-grouping" v-for="item in list" :key="item.id">
                <div class="grouping-name">
                    {{ item.groupingName }}
                </div>
                <div class="photo-list-main">
                    <div class="photo-list-item" v-for="info in item.child" :key="info.id"
                        :style="{background: 'url(' + info.img + ')'}">
                    <div class="photo-name">{{ info.photoName }}</div>
                    <div class="read-more">Read More</div>
                    </div>
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


<script setup>
import {ref} from "vue";
import {db, getDoc, doc} from '../firebase.js';
let input = ref("");

const tags = await getDoc(doc(db, "Tag"));

function filteredList(){
    return tags.filter((tag) =>
    tag.toLowerCase().includes(input.value.toLowerCase()))
}

   
const list = [
    {
        groupingName: 'Trending Photography',
        id: 1,
        child: [
            {
                photoName: 'Waves',
                id: 1,
                img: require('../assets/image11.jpg')
            },
            {
                photoName: 'The Sea',
                id: 2,
                img: require('../assets/image15.jpeg')
            },
            {
                photoName: 'The Myth',
                id: 3,
                img: require('../assets/image14.jpeg')
            },
            {
                photoName: 'The Bar',
                id: 4,
                img: require('../assets/image13.jpeg')
            },
            {
                photoName: 'The View',
                id: 1,
                img: require('../assets/view.jpg')
            },
            {
                photoName: 'The Hill',
                id: 1,
                img: require('../assets/image9.png')
            }
        ]
    },
    

]
</script>

<style lang="less" scoped>
.index {
    .top-search{
        text-align: center;
        padding-top: 170px;
        height: 450px;
        width: 100%;
        background: url(../assets/image18.jpg);
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
            border: 1px solid rgb(61, 155, 233);
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
    .photo-list {
          text-align: center;
          width: 1300px;
          padding-bottom: 30px;
          font-family: Merienda;
          .photo-list-grouping {
              .grouping-name {
                  margin: 57px 0 32px 32px;
                  font-size: 36px;
                  letter-spacing: 0 !important;
                  
              }
              .photo-list-main {
                  display: flex;
                  flex-wrap: wrap;
                  
                  .photo-list-item {
                      height: 120px;
                      width: 380px;
                      margin: 10px;                      
                      padding-top: 178px;
                      padding-left: 30px;
                      background: #fff;
                      
                      color: #ff5d94;
                      flex-shrink: 0;
                      &:nth-child(3n) {
                          margin-right: 0;
                      }
                      .photo-name {
                          width: 105px;
                          height: 33px;
                          border: 1px solid #fff;
                          font-size: 18px;
                          font-weight: bold;
                          margin-bottom: 5px;
                          background: #fbf8f9a9;
                          color: #e55a89;
                          line-height: 32px;
                      }
                      .read-more {
                          width: 105px;
                          height: 33px;
                          border: 1px solid #fff;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          background: #fbf8f9;
                          color: #000;
                          &:hover {
                              background: #ff5d94;
                              color: #fff;
                          }
                      }
                  }
              }
          }
      }
    .bot-list {
        height: 350px;
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
                padding: 0 10px;
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

</style>