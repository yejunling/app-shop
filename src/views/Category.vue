<template lang="html">
  <div class="wrap">
    <v-header class="header">
      <h1 slot="title">商品分类</h1>
    </v-header>
    <section class="view">
      <v-aside :datas="allData.aside"/>
      <router-view 
        :datas="allData.aside" 
      />
    </section>
  </div>
</template>

<script>

import Header from '@/common/_header.vue'
import Aside from '@/components/category/aside.vue'
import category from '@/http/mock.js' //模拟数据
export default {
  components: {
    'v-header': Header,
    'v-aside': Aside
  },
  data () {
    return {
      allData: {
        aside:[{
        title:'笔记本',
        list:[
          {id:1, title:'测试笔记本', imgPath: './static/img/computer1.png'},
          {id:2, title:'测试笔记本', imgPath: './static/img/computer2.png'},
          {id:3, title:'测试笔记本', imgPath: './static/img/computer3.png'},
          {id:4, title:'测试笔记本', imgPath: './static/img/computer4.png'},
          {id:5, title:'测试笔记本', imgPath: './static/img/computer1.png'},
          {id:6, title:'测试笔记本', imgPath: './static/img/computer2.png'},
          {id:7, title:'测试笔记本', imgPath: './static/img/computer3.png'},
          {id:8, title:'测试笔记本', imgPath: './static/img/computer4.png'},
          {id:9, title:'测试', imgPath: './static/img/computer3.png'},
          {id:10, title:'测试', imgPath: './static/img/computer1.png'},
          {id:11, title:'测试', imgPath: './static/img/computer4.png'},
          {id:12, title:'测试', imgPath: './static/img/computer2.png'},
        ]
      },{
        title:'整机',
        list:[
          {id:1, title:'整机', imgPath: './static/img/computer4.png'},
          {id:2, title:'整机', imgPath: './static/img/computer3.png'},
          {id:3, title:'整机', imgPath: './static/img/computer2.png'},
          {id:4, title:'整机', imgPath: './static/img/computer1.png'},
          {id:5, title:'整机', imgPath: './static/img/computer4.png'},
          {id:6, title:'整机', imgPath: './static/img/computer3.png'},
          {id:7, title:'整机', imgPath: './static/img/computer2.png'},
          {id:8, title:'整机', imgPath: './static/img/computer1.png'},
          {id:9, title:'测试', imgPath: './static/img/computer3.png'},
          {id:10, title:'测试', imgPath: './static/img/computer1.png'},
          {id:11, title:'主板', imgPath: './static/img/computer4.png'},
          {id:12, title:'主板', imgPath: './static/img/computer2.png'},
        ]
      },{
        title:'处理器',
        list:[
          {id:1, title:'处理器', imgPath: './static/img/computer2.png'},
          {id:2, title:'处理器', imgPath: './static/img/computer1.png'},
          {id:3, title:'处理器', imgPath: './static/img/computer4.png'},
          {id:4, title:'处理器', imgPath: './static/img/computer3.png'},
          {id:5, title:'处理器', imgPath: './static/img/computer2.png'},
          {id:6, title:'处理器', imgPath: './static/img/computer1.png'},
          {id:7, title:'处理器', imgPath: './static/img/computer4.png'},
          {id:8, title:'处理器', imgPath: './static/img/computer3.png'},
          {id:9, title:'测试', imgPath: './static/img/computer3.png'},
          {id:10, title:'测试', imgPath: './static/img/computer1.png'},
          {id:11, title:'测试', imgPath: './static/img/computer4.png'},
          {id:12, title:'测试', imgPath: './static/img/computer2.png'},
        ]
      },{
        title:'主板',
        list:[
          {id:1, title:'主板', imgPath: './static/img/computer3.png'},
          {id:2, title:'主板', imgPath: './static/img/computer1.png'},
          {id:3, title:'主板', imgPath: './static/img/computer4.png'},
          {id:4, title:'主板', imgPath: './static/img/computer2.png'},
          {id:5, title:'主板', imgPath: './static/img/computer3.png'},
          {id:6, title:'主板', imgPath: './static/img/computer1.png'},
          {id:7, title:'主板', imgPath: './static/img/computer4.png'},
          {id:8, title:'主板', imgPath: './static/img/computer2.png'},
          {id:9, title:'主板', imgPath: './static/img/computer3.png'},
          {id:10, title:'主板', imgPath: './static/img/computer1.png'},
          {id:11, title:'主板', imgPath: './static/img/computer4.png'},
          {id:12, title:'主板', imgPath: './static/img/computer2.png'},
        ]
      }]
      }
    }
  },
  created () {
    // this.$api({
    //   method: 'post',
    //   url: '/category'
    // }).then((res) => {
    //   this.allData = res.data

    // }).catch((error) => {
    //   console.log(error)
    // })
  }
}
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;

  .view {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}
</style>
