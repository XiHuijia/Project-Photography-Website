<template>
    <HeadLine/>
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
   <MyFooter/>
  </template>
  
  <script setup>
  import HeadLine from '@/components/HeadLine.vue'
  import MyFooter from '@/components/MyFooter.vue';
    const list = [
        {
            groupingName: 'Latest Photographs',
            id: 1,
            child: [
                {
                    photoName: 'Grass Land',
                    id: 1-1,
                    img: require('../assets/image16.jpeg')
                },
                {
                    photoName: 'Morocco',
                    id: 1-2,
                    img: require('../assets/image14.jpeg'),       
                },
                {
                    photoName: 'Greece',
                    id: 1-3,
                    img: require('../assets/image15.jpeg')
                },
                {
                    photoName: 'The Lake',
                    id: 1-4,
                    img: require('../assets/image3.png')
                },
                {
                    photoName: 'Free Day',
                    id: 1-5,
                    img: require('../assets/image10.jpeg')
                },
                {
                    photoName: 'The City',
                    id: 1-6,
                    img: require('../assets/image13.jpeg')
                },
            ]
        },
      ]
  
    </script>
    
  <style lang="less" scoped>
  .photo-list {
            text-align: center;
            width: 1300px;
            padding-bottom: 90px;
            .photo-list-grouping {
                .grouping-name {
                    margin: 57px 0 32px 32px;
                    font-size: 36px;
                    letter-spacing: 0 !important;
                }
                .photo-list-main {
                    display: flex;
                    flex-wrap: wrap;
                    .photo-list-item.child.1.image{
                      background: url(../assets/image4.png);
                    }
                    .photo-list-item {
                        height: 120px;
                        width: 380px;
                        margin: 10px;
                      //   padding-bottom: 10px;
                        padding-top: 178px;
                        padding-left: 30px;
                        color: rgb(247, 244, 244);
                        font-size: 40px;
                        text-align: center;
                        flex-shrink: 0;
                        &:nth-child(3n) {
                            margin-right: 0;
                        }
                        .photo-Name {
                            font-size: 50px;
                            font-weight: bold;
                            margin-bottom: 5px;
                        }
                        .read-more {
                            font-size: 20px;
                            width: 105px;
                            height: 33px;
                            border: 1px solid #fff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            &:hover {
                                background: #fff;
                                color: #000;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
  </style>