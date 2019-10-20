<template>
<div>
<h2>后台管理系统</h2>
  <el-tabs :tab-position="tabPosition" >
    <el-tab-pane label="用户管理">
      <div>
         <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="账号"
      width="180">
      <template >
        <span style="margin-left: 10px">{{ 1111111111 }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="密码"
      width="180">
      <template>
        <el-popover trigger="hover" placement="top">
      
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{111111111 }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
            @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
      </div>
    </el-tab-pane>
    <el-tab-pane label="添加用户">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
    <el-input v-model.number="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
  </el-form-item>
</el-form>
    </el-tab-pane>
    <el-tab-pane label="商品列表">
        <el-table
      :data="tableData1"
      border
      ref="multipleTable"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      style="width: 100%">
       <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goodsname"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="amount1"
        sortable
        label="原价">
      </el-table-column>
      <el-table-column
        prop="amount2"
        sortable
        label="现价">
      </el-table-column>
        <el-table-column
         prop="cz"
        label="操作">
          <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData1)"
          type="text"
          size="small">
          编辑
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData1)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
      </el-table-column>
     
    </el-table>
    </el-tab-pane>
    <el-tab-pane label="订单列表">
         <el-table
      :data="tableData1"
      border
      show-summary
      ref="multipleTable"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goodsname"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="amount1"
        sortable
        label="原价">
      </el-table-column>
      <el-table-column
        prop="amount2"
        sortable
        label="现价">
      </el-table-column>
        <el-table-column
      prop="amount3"
      sortable
      label="数量">
    </el-table-column>
        <el-table-column
         prop="cz"
        label="操作">
          <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData1)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
      </el-table-column>
     
    </el-table>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
export default {
   data() {
      const checkUsername = async (rule, value, callback) => {
      let {data} = await this.$axios.get('http://localhost:8080/#/Reg',{
        params:{
          username:this.ruleForm.username
        }
      })
      if(data.code === 0){
        callback(new Error("用户名已存在"));
      }else{
        callback();
      }
      };
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
        tabPosition: 'left',
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],


         tableData1: [{
          name: '王小虎',
          id: '12987122',
          amount1: '134',//原价
          amount2: '3.2',//现价
        }, {
           name: '王小虎',
          id: '12987122',
          amount1: '2134',//原价
          amount2: '3.2',//现价
        }, {
         name: '王小虎',
          id: '12987122',
          amount1: '2324',//原价
          amount2: '3.2',//现价
        }, {
          name: '王小虎',
          id: '12987122',
          amount1: '2324',//原价
          amount2: '3.2',//现价
        }, {
          name: '王小虎',
          id: '12987122',
          amount1: '2034',//原价
          amount2: '3',//现价
        }, {
          name: '王小虎',
          id: '12987122',
          amount1: '21',//原价
          amount2: '2',//现价
        }, {
         name: '王小虎',
          id: '12987122',
          amount1: '1',//原价
          amount2: '3.0',//现价
        }],
        multipleSelection: [],
      
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkUsername, trigger: 'blur' }
          ]
        }
      };
    },
     methods: {
       
         handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        window.console.log(index, row);
      },
       deleteRow(index, rows) {
        rows.splice(index, 1);
      },
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            window.console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
     
    }
    
}
</script>
<style lang="scss" scoped>
h2{
  line-height: 50px;
  text-align: center;
  height:50px;
  width: 100%;
  margin: 0;
}
</style>