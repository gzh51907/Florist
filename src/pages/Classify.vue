<template>
<el-container>
    <el-header height= "45px">
      <div class="seach">
            <input type="seach" placeholder="请输入鲜花名称/关键字">
      </div>
    </el-header>
  <el-container>
    <el-aside width="90px"></el-aside>
    <el-main></el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
    name:'Classify',
    data(){
      return{
      }
    }
}
</script>
<style lang="scss" scoped>
.el-header{
    width: 100%;
    background: #fff;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    padding: 6px 12px;
    line-height: 0;
    border-bottom: 1px solid  rgb(237, 237, 237);
      .seach{
        width: 100%;
          input{
            width: 100%;
            height: 29px;
            background: #ffffff url(../assets/seach.png) no-repeat 8px center;
            background-size: 14px 15px;
            padding-left: 30px;
            box-sizing: border-box;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            background-color: rgb(237, 237, 237);
          }
        }
}
.el-aside{
   background-color: rgb(237, 237, 237);
}
.el-main{
  background-color: #fff;
}
.el-container{
  height: 553px;
}
</style>