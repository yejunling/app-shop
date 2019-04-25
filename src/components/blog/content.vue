<template>
  <div id="content">
    <h2>{{list.title}}</h2>
    <div v-html="list.content"></div>
  </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        data() {
          return {
            msg: '数据',
            list: []
          }
        },
        mounted(){
              var aid = this.$route.params.aid;
              this.requestData(aid);
        },
        methods:{
          requestData(aid){
            var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;

            Axios.get(api).then((response)=>{
              this.list=response.data.result[0];
              }),(err)=>{
                console.log(err)
              }
            }
          }
    }
</script>

<style scoped>

</style>
