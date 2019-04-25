<template lang="html">
  <div class="package">
    <v-header>
      <h1 slot="title">装机服务</h1>
    </v-header>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm">
      <el-form-item label="预算" prop="plan" :rules="[
          { required: true, message: '请输入预算', trigger: 'blur' },
        ]">
        <el-input v-model.number="ruleForm.plan"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="contact" :rules="[
          { required: true, message: '请输入联系人', trigger: 'blur' },
        ]">
        <el-input v-model.number="ruleForm.contact"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="tel" :rules="[
          { required: true, message: '请输入联系方式', trigger: 'blur' },
        ]">
        <el-input v-model.number="ruleForm.tel"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address" :rules="[
          { required: true, message: '请输入地址', trigger: 'blur' },
        ]">
        <el-input v-model.number="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="需求" prop="require" :rules="[
          { required: true, message: '请输入需求', trigger: 'blur' },
        ]">
        <el-input v-model.number="ruleForm.require"></el-input>
      </el-form-item>
      <el-form-item label="更多描述" prop="desc" :rules="[
          { required: true, message: '请输入更多描述', trigger: 'blur' },
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
          plan: '',
          contact: '',
          tel: '',
          address: '',
          require: '',
          desc: '',
        },
      };
  },
  methods:{
   submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 调用接口
            axios.post(mockUrl+'/package', this.ruleForm).then((res) => {
              if (res.status == 200) {
                this.$router.push('/');
                Toast('装机表单增加成功！');
              }
            });
          } else {
            Toast('装机表单增加失败！');
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
