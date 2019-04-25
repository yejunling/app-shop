<template lang="html">
  <div class="login">
    <v-header>
      <h1 slot="title">登录页</h1>
    </v-header>
    <section>
      <mt-field
       label="账号"
        placeholder="请输入账号"
        type = "text"
        v-model = "account"
        :readonly = '!toggle'
        :disableClear = '!toggle'
        ></mt-field>
      <mt-field
       label="密码"
       placeholder="请输入密码"
       type="password"
       v-model="password"
       :readonly='!toggle'
       :disableClear = '!toggle'
        ></mt-field>
      <p class="tip" @click="goRegister()">还没有账号？点击这里注册</p>
    </section>
    <mt-button
     plain
     size="large"
     @click="login"
     v-if='toggle'>登录</mt-button>
    <mt-button
     plain
     size="large"
     @click="logout"
     v-else>退出登录</mt-button>

  </div>
</template>

<script>
import Header from '@/common/_header.vue'
import { Toast } from 'mint-ui'
import axios from 'axios';
import {mockUrl} from '@/http/mock';
export default {
  components:{
    'v-header':Header
  },
  data(){
    return {
      account:'',
      password:'',
      toggle:!this.$store.state.login.token
    }
  },
  methods:{
    // 登录按钮
    login(){
      if(this.account!=="" && this.password!=="") {
        // 登陆
        let data = {
          username: this.account,
          password: this.password,          
        };
        axios.post(mockUrl+'/login', data).then((res) => {
          if (res.status == 200) {
            Toast('登录成功,存储token,跳转网页');
            this.toggle = false;
            this.$store.commit('CHANGE_TOKEN',1);
            this.$store.commit('SET_USER', this.account);
          }
        });
      }else {
        Toast('账号密码不能为空');
      }

      setTimeout(()=>{
        this.$router.replace({
          path: 'user'
        })
      },1000);
      // 登录成
    },

    //退出登录按钮
    logout(){
      Toast('退出登录成功,清除token');
      this.$store.commit('CHANGE_TOKEN',0);
      this.toggle = true;
      this.account = '';
      this.password = '';

    },
    goRegister() {
      this.$router.push('/register');
    },
  }
}

</script>

<style lang="less" scoped>
.login {
  >section {
    .tip {
      padding: 6vw 3vw;
      color:rgb(224, 145, 71);
      letter-spacing: 2px;
      font-size: 16px;
    }
  }
}
</style>
