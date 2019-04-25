<template lang="html">
  <div class="package">
    <v-header>
      <h1 slot="title">订单增加</h1>
    </v-header>
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="90px" class="demo-ruleForm">
      <el-form-item label="联系人" prop="contact" :rules="[
          { required: true, message: '请输入联系人', trigger: 'blur' },
        ]">
        <el-input v-model.number="ruleForm.contact"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel" :rules="[
          { required: true, message: '请输入联系电话', trigger: 'blur' },
        ]">
        <el-input v-model.number="ruleForm.tel"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address" :rules="[
          { required: true, message: '请输入地址', trigger: 'blur' },
        ]">
        <el-input v-model.number="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="维修服务" prop="service" :rules="[
          { required: true, message: '请输入维修服务', trigger: 'blur' },
        ]">
        <el-select v-model="ruleForm.service" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.value"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="问题描述" prop="desc" :rules="[
          { required: true, message: '请输入问题描述', trigger: 'blur' },
        ]">
        <el-input v-model.number="ruleForm.desc"></el-input>
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
      return {
        ruleForm: {
          contact: '',
          tel: '',
          address: '',
          service: '',
          desc: '',
        },
        options: [
          {id: 1, value: '硬件维护'},
          {id: 2, value: '软件维护'},
          {id: 3, value: '网络维护'},
        ],
      };
  },
  created() {
    this.ruleForm.service = parseInt(this.$route.query.type) || 1;
  },
  methods:{
   submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 调用接口
            debugger
            axios.post(mockUrl+'/order', this.ruleForm).then((res) => {
              if (res.status == 200) {
                this.$router.push('/');
                Toast('订单增加成功！');
              }
            });
          } else {
            Toast('订单增加失败！');
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
.package {
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
