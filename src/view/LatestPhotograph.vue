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
          padding-bottom: 30px;
          font-family: Merienda;
          .photo-list-grouping {
              .grouping-name {
                  margin: 30px 0 30px 0;
                  font-size: 36px;
                  letter-spacing: 0 !important;
              }
              .photo-list-main {
                  display: flex;
                  flex-wrap: wrap;
                  
                  .photo-list-item {
                      height: 150px;
                      width: 410px;
                      margin: 10px 10px 10px 1px;                      
                      padding-top: 150px;

                      .photo-name {
                          width: 105px;
                          height: 35px;
                          border: 1px solid #fff;
                          font-size: 18px;
                          font-weight: bold;
                          margin-bottom: 5px;
                          background: #fbf8f9a9;
                          color: #e55a89;
                          line-height: 35px;
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
</style>