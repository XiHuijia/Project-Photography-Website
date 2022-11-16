<template>
    <HeadLine/>
    <button onclick="javascript:history.back(-1);">Go Back</button>
    <div class = "text">My View History</div>
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
    <button onclick="javascript:history.back(-1);">Go Back</button>
    <MyFooter/>
</template>

<script>
import HeadLine from '@/components/HeadLine.vue'
import MyFooter from '@/components/MyFooter.vue';

    export default {
        components: {
        HeadLine,
        MyFooter
        },
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
.text{
    font-family: Merienda;
    font-size: 40px;
    margin:30px 0 30px 0;
    color: rgb(11, 11, 11);
    text-align: center;
}
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

button{
    text-align:center;
    margin: 20px 0 10px 50px;
    cursor: pointer;
    font-family: Merienda;
    padding: 8px 20px;
    border-radius: 15px;
}
button:hover{
    color: rgb(243, 236, 236);
    background-color: rgb(251, 122, 171);
    box-shadow:  3px 3px grey;
    border-radius: 15px;
}
</style>