<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="index">
    <v-header/>
    <v-swiper :swiperData="datas.swiper"/>
    <v-service/>
    <v-section1 :list="datas.section1.list" :banner='datas.section1.banner'/>
    <v-section4 :list="datas.section4.list" :banner='datas.section4.banner'/>
    <v-baseline/>
    <v-footer/>
  </div>
</template>

<script>
import Header from '@/components/index/header.vue'
import Swiper from '@/components/index/swiper.vue'
import Service from '@/components/index/service.vue'
import Section1 from '@/components/index/section1.vue'
import Section4 from '@/components/index/section4.vue'
import Baseline from '@/common/_baseline.vue'
import Footer from '@/common/_footer.vue'
// import index from '@/http/mock.js' //模拟数据
export default {
  name: 'Index',
  components: {
    'v-header': Header,
    'v-swiper': Swiper,
    'v-service': Service,
    'v-section1': Section1,
    'v-section4': Section4,
    'v-baseline': Baseline,
    'v-footer': Footer
  },
  data() {
    return {
      datas: {
        section1:{
          banner: '电脑报修',
          list: [
            {id:1, title:'硬件维修',imgPath:'./static/img/section1-1.png'},
            {id:2, title:'软件维修', imgPath:'./static/img/section1-2.png'}
          ],
        },
        section3:{},
        section4:{
          banner: '校园网络服务',
          list: [
            {id:1, title:'无线WIFI','imgPath':'./static/img/section2-1.png'},
            {id:2, title:'有线网络', 'imgPath':'./static/img/section1-2.png'},
          ],
        },
        swiper:[
          {id:1, imgPath:'./static/img/computer1.png'},
          {id:2, imgPath:'./static/img/computer2.png'},
          {id:3, imgPath:'./static/img/computer3.png'},
          {id:4, imgPath:'./static/img/computer4.png'},
        ]
      },
      loading: true
    }
  },

  beforeCreate() {
    // this.$api({
    //   method: 'post',
    //   url: '/index'
    // }).then((response) => {
    //   this.datas = response.data;
    // }).catch(function(error) {
    //   alert(error);
    // })
  }
}
</script>



<style lang="less" scoped>
.index {
    width: 100%;
    padding-bottom: 14vw;
    background-color: #F8FCFF;
}
</style>
