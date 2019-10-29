<template>
  <div>
    <el-header height="47px">
      <div class="el-icon-arrow-left" @click="goback"></div>
      <h3>注册</h3>
      <div class="nulld"></div>
    </el-header>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model.number="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="aa1">
        <el-button type="primary" @click="reg('ruleForm')">注册</el-button>
      </el-form-item>
      <router-link :to=" '/login'">
        <div class="gologin">账号密码登录 ></div>
      </router-link>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Reg",
  data() {
    const validatePass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    // 校验用户名是否存在
    const checkUsername = async (rule, value, callback) => {
      let { data } = await this.$axios.get(
        "http://10.3.133.60:8827/user/check",
        {
          params: {
            username: this.ruleForm.username
          }
        }
      );
      if (data.code === 0) {
        callback(new Error("用户名已存在"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            message: "密码长度必须为 6 个字符以上",
            trigger: "blur"
          }
        ],
        checkPass: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        username: [
          { required: true, message: "亲，用户名必须填写哟", trigger: "blur" },
          { validator: checkUsername, trigger: "blur" },
          {
            min: 7,
            message: "账号长度必须为 7 个字符以上",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    reg() {
      this.$refs.ruleForm.validate(async valid => {
        // valid： 所有校验规则都通过后，得到true，只要有一个表单元素校验不通过则得到false
        if (valid) {
          // 根据服务器返回结果：注册成功->跳到登录页面
          let { username, password } = this.ruleForm;
          let { data } = await this.$axios.post(
            "http://10.3.133.60:8827/user/reg",
            {
              username,
              password
            }
          );
          if (data.code === 1) {
            this.$router.replace({
              path: "/login"
            });
          } else {
            alert("注册失败");
          }
        } else {
          alert("输入有误，请检查");
          return false;
        }
      });
    },
    goback() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  padding: 0;
  border-bottom: 1px solid #bfbfbf;
  margin-bottom: 50px;
  h3 {
    line-height: 47px;
    font-size: 18px;
  }
}
.nulld {
  width: 47px;
  height: 47px;
}
.el-icon-arrow-left {
  width: 47px;
  height: 47px;
  font-size: 22px;
  text-align: center;
  line-height: 47px;
}
.el-input {
  width: 70%;
}
.aa1 {
  text-align: center;
  padding-right: 100px;
}
.gologin {
  font-size: 16px;
  color: #bfbfbf;
  margin-left: 10px;
  display: inline-block;
}
</style>