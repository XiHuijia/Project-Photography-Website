<template>
    <HeadLine/>
        <div class="photo-list">
            <div class="photo-list-grouping" v-for="item in list" :key="item.id">
                <div class="grouping-name">
                    {{ item.groupingName }}
                </div>

                <div class="photo-list-main">

                    <div @click="goDetail(info.id, info.photoName, info.url, info.author, info.email, info.tag, info.price, info.location)" class="photo-list-item" v-for="info in item.child" :key="info.id"
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
                img: require('../assets/image16.jpeg'),
                url: 'image16.jpeg',
                author: 'Xi Huijia',
                email: 'hjwuxi@gmail.com',
                tag: 'nature',
                location: 'undefined',
                price: '5'
            },
            {
                photoName: 'Morocco',
                id: 1-2,
                img: require('../assets/image14.jpeg'),   
                url: 'image14.jpeg',
                author: 'Xi Huijia',
                email: 'hjwuxi@gmail.com',
                tag: 'nature',
                location: 'undefined',
                price: '6'
            },
            {
                photoName: 'Greece',
                id: 1-3,
                img: require('../assets/image15.jpeg'),
                url: 'image15.jpeg',
                author: 'Xi Huijia',
                email: 'hjwuxi@gmail.com',
                tag: 'nature',
                location: 'undefined',
                price: '3'
            },
            {
                photoName: 'The Lake',
                id: 1-4,
                img: require('../assets/image3.png'),
                url: 'image3.png',
                author: 'Xi Huijia',
                email: 'hjwuxi@gmail.com',
                tag: 'nature',
                location: 'undefined',
                price: '8'
            },
            {
                photoName: 'Free Day',
                id: 1-5,
                img: require('../assets/image10.jpeg'),
                url: 'image10.jpeg',
                author: 'Xi Huijia',
                email: 'hjwuxi@gmail.com',
                tag: 'nature',
                location: 'undefined',
                price: '8'
            },
            {
                photoName: 'The City',
                id: 1-6,
                img: require('../assets/image13.jpeg'),
                url: 'image13.jpeg',
                author: 'Xi Huijia',
                email: 'hjwuxi@gmail.com',
                tag: 'city',
                location: 'undefined',
                price: '5'
            },
        ]
    },
]


</script>

<script scoped>

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
                      margin: 10px 10px 10px 0;                      
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
                          cursor: pointer;
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