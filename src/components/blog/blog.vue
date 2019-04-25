<template lang="html">
  <div id="blog" >
    <div onload="getData()">
      <ul class="list">
        <li v-for="item in list">
          <router-link :to="`/blogContent/${item.aid}`">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
    export default {
        data(){
          return{
            list:[]
          }
        },
        methods:{
          getData(){
            var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=2';
            Axios.get(api).then((response)=> {
              this.list=response.data.result;
            }).catch((error)=>{
              console.log(error)
            })
          }

        },
        mounted(){
          /* 生命周期函数*/
          this.getData();
        }

    }
</script>

<style lang="less" scoped>
 .list{
   .li{
     height: 3.4rem;
     line-height: 3.4rem;
     font-size: 1.6rem;
     border-bottom: 1px solid #e0e0e0;
     a{
       color: #666;
     }
   }
 }
</style>
