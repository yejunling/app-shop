<template lang="html">
  <div class="register">
    <v-header>
      <h1 slot="title">登录页</h1>
    </v-header>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name" :rules="[
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ]">
        <el-input v-model.number="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex" :rules="[
          { required: true, message: '请输入性别', trigger: 'blur' },
        ]">
        <el-select v-model="ruleForm.sex" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]">
        <el-input v-model.number="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="phone" :rules="[
          { required: true, message: '请输入电话号码', trigger: 'blur' },
        ]">
        <el-input v-model.number="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '@/common/_header.vue'
import {mockUrl} from '@/http/mock';
import { Toast } from 'mint-ui'
export default {
  components:{
    'v-header':Header
  },
  data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          pass: '',
          checkPass: '',
          sex: '',
          email: '',
          phone: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        },
        options: [{
          id: 1, value: '男'
        },{
          id: 2, value: '女'
        }],
      };
  },
  methods:{
   submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let data = {
              username: this.ruleForm.name,
              password: this.ruleForm.pass,
              gender: this.ruleForm.sex,
              email: this.ruleForm.email,
              tel: this.ruleForm.phone,
            };
            // 注册
            axios.post(mockUrl+'/reg', data).then((res) => {
              if (res.status == 200) {
                this.$router.push('login');
                Toast('注册成功！');
              }
            });
          } else {
            Toast('注册失败！');
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}

</script>

<style lang="less" scoped>
.register {
  width:100%;
  height:100%;
  form{
    margin-top:10px;
    width:calc(100% - 5px);
  }
  .el-select{
    width:100%;
  }
}
</style>
