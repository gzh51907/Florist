<template>
<div>
<el-header height="47px">
       <div class="el-icon-arrow-left"></div>
        <h3>登录</h3>  
      <div class="nulld"></div>
  </el-header>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="账号" prop="username">
    <el-input v-model.number="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
        <el-checkbox label="下次免登陆" v-model="ruleForm.mdl"></el-checkbox>
      </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
  </el-form-item>
  <router-link :to=" '/reg'">
  <div class="goreg">>去注册</div>
  </router-link>
</el-form>
</div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        mdl: true
      },
      rules: {
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        username: [
          { required: true, message: "用户名必须填写", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      //   校验整个表单
      this.$refs.regForm.validate(async valid => {
        // valid： 所有校验规则都通过后，得到true，只要有一个表单元素校验不通过则得到form
        if (valid) {
          // alert('submit!');
          // 发起ajax请求，等待服务器返回结果
          // 根据服务器返回结果：注册成功->跳到“我的”

          let { username, password, mdl } = this.ruleForm;

          let { data } = await this.$axios.get(
            "http://localhost:8080/login",
            {
              params: {
                username,
                password,
                mdl
              }
            }
          );
          console.log("data:", data);

          // this.$router.replace('/mine')
          if (data.code === 1) {
            let { targetUrl } = this.$route.query;console.log('targetUrl:',targetUrl)

            

            // 把token写入localstorage
            // localStorage.setItem("Authorization", data.data);
            this.$store.commit('login',{username,Authorization:data.data})
            // this.$router.replace({path:'/mine',params:{username}})

            this.$router.replace({
              path: targetUrl || "/mine"
            });
          } else {
            alert("用户名或密码不正确");
          }
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    }
  }
};

</script>
<style lang="scss" scoped>
.el-header{
  display: flex;
  justify-content: space-between;
  padding: 0;
  border-bottom: 1px solid #bfbfbf;
  margin-bottom: 50px;
   h3{
     line-height: 47px;
     font-size: 18px;
   }
  
}
 .nulld{
     width: 47px;
     height: 47px;
   }
 .el-icon-arrow-left{
     width: 47px;
     height: 47px;
     font-size: 22px;
     text-align: center;
     line-height: 47px;
   }
.el-input{
    width: 70%;
}
.aa1{
 text-align: center;
 padding-right: 100px;
}
.goreg{
  font-size: 16px;
  color: #bfbfbf;
  margin-left: 10px;
}
</style>