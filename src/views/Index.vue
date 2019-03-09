<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="index">
    <v-header/>
    <v-swiper :swiperData="datas.swiper"/>
    <v-service/>
    <v-section1 :list="datas.section1.list" :banner='datas.section1.banner'/>
    <v-section2 :list="datas.section2.list" :banner='datas.section2.banner'/>
    <v-section3/>
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
import Section2 from '@/components/index/section2.vue'
import Section3 from '@/components/index/section3.vue'
import Section4 from '@/components/index/section4.vue'
import Baseline from '@/common/_baseline.vue'
import Footer from '@/common/_footer.vue'
// import index from '@/http/mock.js' //模拟数据
export default {
  components: {
    'v-header': Header,
    'v-swiper': Swiper,
    'v-service': Service,
    'v-section1': Section1,
    'v-section2': Section2,
    'v-section3': Section3,
    'v-section4': Section4,
    'v-baseline': Baseline,
    'v-footer': Footer
  },
  data() {
    return {
      datas: {
        section1:{
          banner: '硬件维护',
          list: [
            {id:1, imgPath:'./static/img/computer1.png'},
            {id:2, imgPath:'./static/img/computer2.png'},
            {id:3, imgPath:'./static/img/computer3.png'},
            {id:4, imgPath:'./static/img/computer4.png'},
          ],
        },
        section2:{
          banner: '软件维护',
          list: [
            {id:1, title:'测试', price: '134', intro: '', imgPath: './static/img/computer1.png'},
            {id:2, title:'测试', price: '234', intro: '', imgPath:'./static/img/computer2.png'},
            {id:3, title:'测试', price: '334', intro: '', imgPath:'./static/img/computer3.png'},
            {id:4, title:'测试', price: '434', intro: '', imgPath:'./static/img/computer4.png'},
            {id:5, title:'测试', price: '134', intro: '', imgPath: './static/img/computer1.png'},
            {id:6, title:'测试', price: '234', intro: '', imgPath:'./static/img/computer2.png'},
            {id:7, title:'测试', price: '334', intro: '', imgPath:'./static/img/computer3.png'},
            {id:8, title:'测试', price: '434', intro: '', imgPath:'./static/img/computer4.png'},
            {id:9, title:'测试', price: '134', intro: '', imgPath: './static/img/computer1.png'},
            {id:10, title:'测试', price: '234', intro: '', imgPath:'./static/img/computer2.png'},
            {id:11, title:'测试', price: '334', intro: '', imgPath:'./static/img/computer3.png'},
            {id:12, title:'测试', price: '434', intro: '', imgPath:'./static/img/computer4.png'},
          ],
        },
        section3:{},
        section4:{
          banner: '网络服务',
          list: [
            {id:1, title:'cs1', start:'12:02','imgPath':'./static/img/computer1.png',price:100,end:'2019/06/23 02:00:00'},
            {id:2, title:'cs2', start:'12:02','imgPath':'./static/img/computer2.png',price:200,end:'2019/07/23 02:00:00'},
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
